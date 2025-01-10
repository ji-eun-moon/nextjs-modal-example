import { AlertProps } from "@/libs/dialogs/dialogs.type";
import { useDialog } from "@/libs/dialogs/useDialog";

import { useEffect } from "react";
import Icon from "../Icon";

/**
 * Alert 컴포넌트
 * @param alertType 알림타입
 * @param message 알림메시지
 */
export default function Alert({
  alertType,
  message,
  title = "",
  titleIcon = "",
}: AlertProps) {
  const { dismiss } = useDialog();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const alertIcon: Record<string, string> = {
    success: "iconamoon:check-circle-1-duotone",
    info: "iconamoon:information-circle-duotone",
    warning: "iconamoon:attention-circle-duotone",
    error: "iconamoon:attention-circle-duotone",
    alert: "iconamoon:information-circle-duotone",
  };

  const color: Record<string, string> = {
    success: "success",
    info: "info",
    warning: "warning",
    error: "danger",
    alert: "primary",
  };

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    dismiss();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      onClick={(e) => handleClose(e)}
    >
      <div
        className="border rounded-md bg-white border-gray-200 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 p-4 border-b border-gray-200">
          <Icon name={titleIcon ? titleIcon : alertIcon[alertType]} />
          <div className={`text-${color[alertType]} font-bold select-none`}>
            {title ? title : alertType.toUpperCase()}
          </div>
        </div>
        <div className="px-6 py-7 flex items-center select-none text-gray-800">
          {message}
        </div>
        <div className="p-4 bg-gray-50 flex justify-end">
          <button onClick={(e) => handleClose(e)}>OK</button>
        </div>
      </div>
    </div>
  );
}
