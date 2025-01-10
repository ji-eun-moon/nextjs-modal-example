export interface ModalProps {
  title?: string | React.ReactNode;
  titleIcon?: string;
  body: React.ReactNode;
}

export interface SideDialogProps {
  title?: string | React.ReactNode;
  position?: "left" | "right";
  body: React.ReactNode;
}

export interface ConfirmProps {
  title: string;
  message: string;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export interface AlertProps {
  alertType: "success" | "info" | "warning" | "error" | "alert";
  title?: string | React.ReactNode;
  titleIcon?: string;
  message: string | React.ReactNode;
}

export type DialogType =
  | { type: "alert"; props: AlertProps }
  | { type: "confirm"; props: ConfirmProps }
  | { type: "modal"; props: ModalProps }
  | { type: "side"; props: SideDialogProps };

export type CreateDialogType =
  | { type: "alert"; props: AlertProps; id: string }
  | { type: "confirm"; props: ConfirmProps; id: string }
  | { type: "modal"; props: ModalProps; id: string }
  | { type: "side"; props: SideDialogProps; id: string };
