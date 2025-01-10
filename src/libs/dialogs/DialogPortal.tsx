import Modal from "@/components/dialogs/Modal";
import { useDialogContext } from "./useDialog";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CreateDialogType } from "./dialogs.type";
import SideDialog from "@/components/dialogs/SideDialog";
import Confirm from "@/components/dialogs/Confirm";
import Alert from "@/components/dialogs/Alert";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DIALOG_COMPONENTS: Record<string, React.ComponentType<any>> = {
  modal: Modal,
  side: SideDialog,
  confirm: Confirm,
  alert: Alert,
};

function DialogPortal() {
  const openedDialogs = useDialogContext();
  const [dialogElement, setDialogElement] = useState<Element | null>(null);

  useEffect(() => {
    setDialogElement(document.getElementById("modal-root"));
  }, []);

  if (!dialogElement) {
    return null;
  }

  const renderDialog = openedDialogs.map((dialog) => {
    if (!("id" in dialog)) {
      throw new Error(
        `Dialog is missing 'id' property: ${JSON.stringify(dialog)}`
      );
    }

    const { type, props, id } = dialog as CreateDialogType;
    const DialogComponent = type && DIALOG_COMPONENTS[type];

    if (!DialogComponent) {
      throw new Error(`Dialog type '${type}' is not supported.`);
    }

    return (
      <div key={id} onClick={(e) => e.stopPropagation()}>
        <DialogComponent key={id} {...props} />
      </div>
    );
  });

  return createPortal(renderDialog, dialogElement);
}

export default DialogPortal;
