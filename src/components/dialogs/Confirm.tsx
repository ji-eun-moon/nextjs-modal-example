import { useEffect } from "react";
import { useDialog } from "@/libs/dialogs/useDialog";
import { ConfirmProps } from "@/libs/dialogs/dialogs.type";
import Icon from "../Icon";

export default function Confirm({
  title,
  message,
  onConfirm,
  cancelLabel,
  confirmLabel,
}: ConfirmProps) {
  const { dismiss } = useDialog();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleConfirm = (event: React.MouseEvent) => {
    event.stopPropagation();
    onConfirm();
    dismiss();
  };

  const closeConfirm = (event: React.MouseEvent) => {
    event.stopPropagation();
    dismiss();
  };

  const splitMessage = (message: string) => {
    return message.split(/(?<=[.!?])\s+/).filter(Boolean);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 pt-24 md:pt-0"
      onClick={(e) => closeConfirm(e)}
    >
      <div
        className="border md:rounded-2xl bg-white border-gray-200 h-full w-full md:w-fit md:h-fit rounded-t-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center p-8 pb-0">
          <div
            className="flex items-center cursor-pointer"
            onClick={closeConfirm}
          >
            <Icon name="mi:close" className="text-stone-700" size={24} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between select-none max-h-[calc(100vh-200px)] md:w-[28rem] md:h-[26rem] h-full w-full p-8 pt-0">
          <div className="flex flex-col gap-6 h-full w-ful justify-center items-center">
            <h4 className="text-red-600 text-center">{title}</h4>
            <div className="subtitle">
              {splitMessage(message).map((sentence, index) => (
                <p key={index} className="text-center">
                  {sentence}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center w-full">
            <button onClick={(e) => closeConfirm(e)}>
              {cancelLabel ? cancelLabel : "Cancel"}
            </button>
            <button onClick={(e) => handleConfirm(e)}>
              {confirmLabel ? confirmLabel : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
