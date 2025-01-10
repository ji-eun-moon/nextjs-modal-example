"use client";

import { useRouter } from "next/navigation";

function ParallelModal() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/login")}>
        Open Parallel Routes Modal
      </button>
    </div>
  );
}

export default ParallelModal;
