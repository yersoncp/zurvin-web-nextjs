import React, { FC, ReactNode } from "react";
import s from "./Stack.module.css";

type StackProps = {
  gap?: number;
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end" | "space-between";
  direction?: "column" | "row";
  children: ReactNode;
  fullH?: boolean;
  wrap?: boolean;
  onClick?: () => void;
  className?: string;
}

const Stack: FC<StackProps> = ({
  gap = 0,
  align = "normal",
  justify = "start",
  direction = "column",
  children,
  fullH,
  wrap,
  onClick,
  className = "",
}) => {
  const SIZE_BASE = 6;

  return (
    <div
      className={`${className} ${s.stack}`}
      onClick={onClick}
      style={{
        gap: `${gap * SIZE_BASE}px`,
        alignItems: `${align}`,
        justifyContent: `${justify}`,
        flexDirection: `${direction}`,
        height: fullH ? "100%" : "",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
};
export default React.memo(Stack);
