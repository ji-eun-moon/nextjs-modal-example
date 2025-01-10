"use client";

import { useDialog } from "@/libs/dialogs/useDialog";
import React from "react";
import { nanoid } from "nanoid";

function ModalStack() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { show, dismiss } = useDialog();

  const showSecondModal = () => {
    show({
      type: "alert",
      props: {
        alertType: "alert",
        title: "New Alert",
        message: "Happy Friday!",
      },
    });
  };

  const showModal = () => {
    show({
      type: "side",
      props: {
        body: (
          <div className="w-96 flex flex-col gap-4">
            <p>{nanoid()}</p>
            <button onClick={showModal}>Open New Dialog</button>
            <button onClick={showSecondModal}>Open Alert</button>
          </div>
        ),
      },
    });
  };

  return (
    <div>
      <button onClick={showModal}>Open Stack Modal</button>
    </div>
  );
}

export default ModalStack;
