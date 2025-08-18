import type {  HTMLAttributes, ReactNode } from "react";
import { trim } from "../utils/general";

export default function Layout({
  children,
  className = "",
  ...attributes
}: Readonly<{
  children: ReactNode;
  className?: string;
}> &
  HTMLAttributes<HTMLElement>) {
  return (
    <div
      id="layout"
      className={trim(`
        grid
        grid-cols-1
        min-h-screen
        min-w-screen
        overflow-hidden
        ${className}`)}
      {...attributes}
    >
      {children}
      {/* <FloatingButtons /> */}
    </div>
  );
}
