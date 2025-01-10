"use client";

import { useRef } from "react";

function DialogModal() {
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
    <div>
      <button onClick={openDialog}>Open Dialog Modal</button>
      <dialog ref={dialogRef} className="rounded-2xl" onClick={closeDialog}>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeDialog}>Close Dialog Modal</button>
        </div>
      </dialog>
    </div>
  );
}

export default DialogModal;
