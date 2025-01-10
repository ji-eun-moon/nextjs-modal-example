import { DialogProvider } from "@/libs/dialogs/useDialog";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <DialogProvider>{children}</DialogProvider>;
}

export default Layout;
