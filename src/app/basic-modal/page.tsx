"use client";

import React, { useState } from "react";

function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Basic Modal</button>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsOpen(false)}>Close Basic Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasicModal;
