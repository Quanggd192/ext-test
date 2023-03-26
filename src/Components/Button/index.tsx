import React from "react";

interface Props {
  children: React.ReactNode;
  style?: any;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}
export default function Button({
  children,
  style,
  width,
  height,
  className,
  onClick,
}: Props) {
  const customStyle = {
    ...style,
    width,
    height,
  };

  return (
    <button
      onClick={onClick}
      className={`app-button ${className}`}
      style={customStyle}
    >
      {children}
    </button>
  );
}
