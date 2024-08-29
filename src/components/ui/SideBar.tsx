"use client";

import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { sideBarItems } from "@/constants/sideBarItems";

const SideBar = () => {
  const { Sider } = Layout;
  const role = "super_admin";
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "#508D4E",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        <ShoppingCartOutlined
          style={{
            fontSize: "2rem",
            padding: "2px 0px",
          }}
        />
        <h4>Trendy Bazar</h4>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
