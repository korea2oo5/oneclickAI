import React, { useState, useCallback } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <>
      <Menu mode="horizontal" theme="dark" triggerSubMenuAction="click">
        <SubMenu
          onTitleClick={toggleCollapsed}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
        <Menu.Item style={{ float: 'right' }}>
          <Link href="/train">
            <a>Get Started</a>
          </Link>
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }}>
          <Link href="/">
            <a>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuBar;
