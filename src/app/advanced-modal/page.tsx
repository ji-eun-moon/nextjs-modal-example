"use client";

import useModal from "@/hooks/useModal";
import ModalPortal from "../portal-modal/_components/ModalPortal";

function AdvancedModal() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Advanced Modal</button>
      <ModalPortal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default AdvancedModal;
