import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="container mx-auto p-4 flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/basic-modal">Basic Modal</Link>
      <Link href="/dialog-modal">Dialog Modal</Link>
      <Link href="/portal-modal">Portal Modal</Link>
      <Link href="/parallel-routes">Parallel Routes</Link>
      <Link href="/compare-modals">Compare Modals</Link>
      <Link href="/advanced-modal">Advanced Modal</Link>
      <Link href="/modal-stack">Modal Stack</Link>
    </div>
  );
}

export default NavBar;
