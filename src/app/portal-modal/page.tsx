"use client";
import React, { useState } from "react";
import ModalPortal from "./_components/ModalPortal";

function PortalModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Portal Modal</button>
      <ModalPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default PortalModalPage;
