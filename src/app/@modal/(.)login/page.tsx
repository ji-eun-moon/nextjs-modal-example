"use client";

import { useRouter } from "next/navigation";

function LoginModal() {
  const router = useRouter();
  return (
    <div>
      <div className="modal-overlay" onClick={() => router.back()}>
        <div
          className="modal-body"
          onClick={(event) => event.stopPropagation()}
        >
          Login Modal
          <button onClick={() => router.back()}>Close Modal</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
