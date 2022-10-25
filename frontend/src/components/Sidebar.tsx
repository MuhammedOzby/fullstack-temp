import React from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Menu } from "antd";

function Sidebar(props: { menuItems: Array<ItemType> }) {
  const navigate = useNavigate();
  const resolved = useLocation();
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={(menu) => {
        if (menu.key != "exit") navigate(`${menu.key}`);
      }}
      selectedKeys={[match?.pathname ? match.pathname : ""]}
      items={props.menuItems}
    />
  );
}

export default Sidebar;
