"use client";

import { UserOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Input, Layout, Select } from "antd";

const { Content } = Layout;
const { Option } = Select;

const ProfilePage = () => {
  return (
    <Layout style={{ minHeight: "5vh" }}>
      <div style={{ padding: "16px", textAlign: "center" }}>
        <UserOutlined style={{ fontSize: "48px" }} />
        <h3>Hello,Parvez Rahman</h3>
      </div>
      <Layout style={{ padding: "24px" }}>
        <Content>
          <Card
            title="Personal Information"
            extra={<Button type="link">Change Information</Button>}
          >
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input placeholder="Parvez Rahman" />
              </Form.Item>
              <Form.Item label="Your Date of Birth">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Gender">
                <Select placeholder="Select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
