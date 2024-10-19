import {
  ProfileOutlined,
  ShoppingCartOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sideBarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href="/profile">Profile</Link>,
      key: "profile",
      icon: <UserOutlined />,
    },
    {
      label: <Link href="/my-orders">My Orders</Link>,
      key: "my-orders",
      icon: <ShoppingCartOutlined />,
    },
  ];

  const customerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
    },
  ];

  const sellerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/products`}>Products</Link>,
      icon: <TableOutlined />,
      key: `/${role}/products`,
    },
  ];

  if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else if (role === USER_ROLE.SELLER) return sellerSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
