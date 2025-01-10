import React, { useEffect } from "react";
import { ModalProps } from "@/libs/dialogs/dialogs.type";
import { useDialog } from "@/libs/dialogs/useDialog";
import Icon from "../Icon";

/**
 * Modal 컴포넌트
 * @param title 모달 제목
 * @param titleIcon 모달 타이틀 앞에 출력될 아이콘
 * @param body 모달 body
 */
export default function Modal({
  title = "",
  titleIcon = "",
  body,
}: ModalProps) {
  const { dismiss } = useDialog();

  const closeModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    dismiss();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-end md:items-center justify-center bg-black bg-opacity-70 pt-24 md:pt-0"
      onClick={closeModal}
    >
      <div
        className="border md:rounded-2xl bg-white border-gray-200 h-full w-full md:w-fit md:h-fit rounded-t-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-8 pb-0">
          <div className="flex gap-2">
            {titleIcon && <Icon name={titleIcon} />}
            {title && (
              <div className={`text-gray-700 font-bold select-none`}>
                {title}
              </div>
            )}
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={closeModal}
          >
            <Icon name="mi:close" className="text-stone-700" size={24} />
          </div>
        </div>
        <div className="flex items-center select-none max-h-[calc(100vh-200px)] md:w-[37.5rem] md:h-[37.5rem] h-full w-full">
          <div className="overflow-y-auto md:max-h-[80vh] p-8 scrollbar flex w-full h-full justify-center">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}
