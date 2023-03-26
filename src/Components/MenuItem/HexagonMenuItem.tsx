import React, { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
  className?: string;
}
export default function HexagonMenuItem({ icon, text, className }: Props) {
  return (
    <div className={`hexagon-menu-item ${className}`}>
      {icon}
      {text}
    </div>
  );
}
