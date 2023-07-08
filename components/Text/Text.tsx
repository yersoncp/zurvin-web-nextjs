import React, { FC, ReactNode } from "react";
import s from "./Text.module.css";

type TextProps = {
  variant?: "h1" | "h2" | "h3" | "body" | "small"
  color?: "accent" | "gray" | "white"
  as?: "div" | "span" | "h1" | "h2"
  align?: "center" | "right"
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  children: ReactNode
  className?: string
}

const Text: FC<TextProps> = ({ variant, color, children, as = "div", align, weight, className }) => {

  const classNameStr = [
    s.default,
    s[`${color}`],
    s[`${align}`],
    s[`${variant}`],
    s[`w${weight}`],
    className,
  ].join(" ");

  return React.createElement(
    as,
    { className: classNameStr },
    children
  );

};

export default Text;
