import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDialog } from "@/libs/dialogs/useDialog";
import { SideDialogProps } from "@/libs/dialogs/dialogs.type";
import Icon from "../Icon";

/**
 * SideDialog 컴포넌트
 * @param title 다이얼로그 제목
 * @param direction 슬라이드 방향
 * @param body 다이얼로그 body
 */
export default function SideDialog({
  title = "",
  body,
  position = "right",
}: SideDialogProps) {
  const { dismiss } = useDialog();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleCloseDialog = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      dismiss();
    }, 500);
  };

  const aimationClass = () => {
    if (isClosing) {
      return position === "right" ? "slide-out-right" : "slide-out-left";
    }
    return position === "right" ? "slide-in-right" : "slide-in-left";
  };

  const dialogOverlay = () => {
    const base = "fixed inset-0 flex items-center bg-black bg-opacity-30";
    const containerPosition =
      position === "right" ? "justify-end" : "justify-start";
    return classNames(base, containerPosition);
  };

  const dialogContainer = () => {
    const base = "h-full bg-main p-6 shadow-md bg-white";
    return classNames(base, aimationClass());
  };

  const icon = position === "right" ? "mi:arrow-right" : "mi:arrow-left";

  const iconPosition =
    position == "right"
      ? "cursor-pointer flex justify-start"
      : "cursor-pointer flex justify-end";

  return (
    <div className={dialogOverlay()} onClick={(e) => handleCloseDialog(e)}>
      <div className={dialogContainer()} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-6 h-full">
          <div className={iconPosition} onClick={(e) => handleCloseDialog(e)}>
            <Icon
              name={icon}
              className="text-gray-500 hover:text-primary"
              size={36}
            />
          </div>
          {title && (
            <div className="font-bold text-2xl text-gray-700">{title}</div>
          )}
          {body}
        </div>
      </div>
    </div>
  );
}
