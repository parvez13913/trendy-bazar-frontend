"use client";
import { Layout } from "antd";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return (
    <div>
      <Content
        style={{
          minHeight: "100vh",
          marginLeft: "20px",
        }}
      >
        {children}
      </Content>
    </div>
  );
};

export default Contents;
