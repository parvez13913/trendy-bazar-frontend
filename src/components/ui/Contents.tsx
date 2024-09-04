"use client";
import { Layout } from "antd";
import Header from "./Header";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />

      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
