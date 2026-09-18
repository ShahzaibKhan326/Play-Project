import "./SidebarItem.css";
import { useNavigate } from "react-router-dom";

function SidebarItem({ icon, label, collapsed, path }) {
  const navigate = useNavigate();

  function handleClick() {
    if (!path) return;

    navigate(path);
  }

  return (
    <button
      onClick={handleClick}
      className="link"
      disabled={!path}
    >
      {icon}
      {!collapsed && label}
    </button>
  );
}

export default SidebarItem;