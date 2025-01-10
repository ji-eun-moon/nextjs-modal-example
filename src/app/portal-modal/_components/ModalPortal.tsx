import { createPortal } from "react-dom";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalPortal({ isOpen, onClose }: PortalModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close Portal Modal</button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}

export default ModalPortal;
