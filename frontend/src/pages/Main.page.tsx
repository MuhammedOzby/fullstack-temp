import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default class MainPage extends Component<{}, { collapsed: boolean }> {
  private sidebarMenuItems: Array<ItemType>;
  constructor(props: object) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.sidebarMenuItems = [
      { label: "Item 1", key: "/item1", icon: <UserOutlined /> },
      {
        label: "Çıkış",
        key: "exit",
        icon: <LogoutOutlined />,
        onClick: () => alert("Exited"),
      },
    ];
  }
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Sidebar menuItems={this.sidebarMenuItems} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () =>
                  this.setState({ collapsed: !this.state.collapsed }),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
