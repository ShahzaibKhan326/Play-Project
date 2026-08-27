import "./SidebarItem.css";

function SidebarItem({ icon, label, collapsed }) {
  return (
    <div className="link">
      {icon}
      {!collapsed && label}
    </div>
  );
}

export default SidebarItem;