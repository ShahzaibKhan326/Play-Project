import React from "react";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

function Dropdowns({ title, links }) {
  const menuItems = links.map((link) => ({
    key: link.id,
    label: link.label,
  }));

  return (
    <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
      <Space>
        {title}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}

export default Dropdowns;