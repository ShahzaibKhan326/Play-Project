import "./Sidebar.css";

import { navLinks, footerLinks } from "./data/Sidebardata";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ collapsed = false }) {

  return (
    <aside className={collapsed ? "collapsed" : ""}>

      <div className="links">

        <div className="navlinks">

          {navLinks.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={<item.icon className="nav-icon" />}
              collapsed={collapsed}
            />
          ))}

        </div>

        <div className="footerLinks">

          {footerLinks.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={<item.icon className="nav-icon" />}
              collapsed={collapsed}
            />
          ))}

        </div>

      </div>

    </aside>
  );
}