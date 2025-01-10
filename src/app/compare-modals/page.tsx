"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

function CompareModals() {
  const router = useRouter();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="relative flex flex-col gap-4 text-5xl font-extrabold">
      <p>Parent Style: text-5xl, font-extrabold</p>
      <button onClick={() => setIsBasicModalOpen(true)}>
        Open Basic Modal
      </button>

      {isBasicModalOpen && (
        <div className="modal-overlay">
          <div className="modal-body">
            <p>This is a Basic Modal</p>
            <button onClick={() => setIsBasicModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      <button onClick={() => setIsPortalModalOpen(true)}>
        Open Portal Modal
      </button>
      {isPortalModalOpen &&
        createPortal(
          <div className="modal-overlay">
            <div className="modal-body">
              <p>This is a Portal Modal</p>
              <button onClick={() => setIsPortalModalOpen(false)}>Close</button>
            </div>
          </div>,
          document.getElementById("modal-root")!
        )}

      <button onClick={openDialog}>Open Dialog Modal</button>

      <dialog ref={dialogRef} className="rounded-2xl" onClick={closeDialog}>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          <p>This is a Dialog Modal</p>
          <button onClick={closeDialog}>Close Dialog Modal</button>
        </div>
      </dialog>

      <button onClick={() => router.push("/login")}>
        Open Parallel Routes Modal
      </button>
    </div>
  );
}

export default CompareModals;
