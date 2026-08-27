import React from "react";
import Dropdowns from "./Dropdowns";
import  headerDropdownLinks  from "./data/dropdownitems.js";
import "./headerDropdownLinks.css"

function HeaderDropdown() {
  return (
    <div className="headerDropdownLinks">
      {headerDropdownLinks.map((item) => (
        <Dropdowns
          key={item.id}
          title={item.title}
          links={item.links}
        />
      ))}
    </div>
  );
}

export default HeaderDropdown;