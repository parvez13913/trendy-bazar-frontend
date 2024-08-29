import { MenuProps } from "antd";
import Link from "next/link";
import { ProfileOutlined, TableOutlined } from "@ant-design/icons";
import { USER_ROLE } from "./role";

export const sideBarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-user`}>Manage Users</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-users`,
    },
    {
      label: <Link href={`/${role}/manage-seller`}>Manage Seller</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-seller`,
    },
    {
      label: <Link href={`/${role}/manage-customer`}>Manage Customer</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-customer`,
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...adminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
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

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else if (role === USER_ROLE.SELLER) return sellerSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
