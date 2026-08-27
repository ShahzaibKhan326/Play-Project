import "./Button.css";
import { UserAddOutlined } from "@ant-design/icons";

function Button({ text, size, type, color, className , icon  }) {
  const variant = `${type} ${size} ${className || ""}`;
   
  return (
    <button style={{ color }} className={variant}>

      <span className="btn-bg-container"></span>

      <span className="btn-front-layer">
        {icon && <UserAddOutlined/>}
        {text}
      </span>
    </button>
  );
}

export default Button;