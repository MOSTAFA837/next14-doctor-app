import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </>
  );
}
