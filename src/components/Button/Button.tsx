import "./Button.css";
import { ButtonProps } from "../../models/interfaces/ButtonProps/ButtonProps.ts";

const Button = ({ title, priority, action, type, disable }: ButtonProps) => {
  return (
    <button
      onClick={action}
      type={type ? type : "button"}
      className={`btn ${priority === "Input" ? "greenBg" : "redBg"}`}
      disabled={disable ? disable : false}
    >
      {title}
    </button>
  );
};

export default Button;
