"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import {
  AlertProps,
  ConfirmProps,
  CreateDialogType,
  DialogType,
  ModalProps,
  SideDialogProps,
} from "./dialogs.type";
import DialogPortal from "./DialogPortal";

export const DialogContext = createContext<DialogType[]>([]);

export const DialogDispatchContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show: ({ type, props }: DialogType) => {},
  dismiss: () => {},
});

export const useDialogContext = () => useContext(DialogContext);
export const useDialogDispatchContext = () => useContext(DialogDispatchContext);
const createDialog = (
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any,
  id: string
): CreateDialogType => {
  switch (type) {
    case "alert":
      return {
        type: "alert",
        props: props as AlertProps,
        id,
      };
    case "modal":
      return {
        type: "modal",
        props: props as ModalProps,
        id,
      };
    case "side":
      return {
        type: "side",
        props: props as SideDialogProps,
        id,
      };
    case "confirm":
      return {
        type: "confirm",
        props: props as ConfirmProps,
        id,
      };
    default:
      throw new Error(`Invalid dialog type: ${type}`);
  }
};

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [openedDialogs, setOpenedDialogs] = useState<DialogType[]>([]);

  const show = ({ type, props }: DialogType) => {
    const newDialog = createDialog(type, props, nanoid());
    setOpenedDialogs((modals: DialogType[]) => [...modals, newDialog]);
  };

  const dismiss = () => {
    setOpenedDialogs((modals) => {
      return modals.slice(0, modals.length - 1);
    });
  };

  const dispatch = useMemo(() => ({ show, dismiss }), []);

  return (
    <DialogDispatchContext.Provider value={dispatch}>
      <DialogContext.Provider value={openedDialogs}>
        {children}
        <DialogPortal />
      </DialogContext.Provider>
    </DialogDispatchContext.Provider>
  );
}

export const useDialog = () => {
  const context = useContext(DialogDispatchContext);
  if (!context) {
    throw new Error("useDialog must be used within an DialogProvider");
  }
  return context;
};
