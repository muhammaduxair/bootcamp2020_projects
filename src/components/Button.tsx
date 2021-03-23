import { CSSProperties, MouseEventHandler } from "react";

interface ButtonInt {
  style?: CSSProperties;
  title: string;
  className?: string;
  onClick?: MouseEventHandler;
}

const Button = ({ title, style, className = "button", onClick }: ButtonInt) => (
  <button className={`button ${className}`} style={style} onClick={onClick}>
    {title}
  </button>
);
export default Button;
