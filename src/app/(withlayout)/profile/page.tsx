"use client";

import { useUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/service/auth.service";
import { UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Image,
  Input,
  Layout,
  Select,
} from "antd";

const { Content } = Layout;
const { Option } = Select;

const ProfilePage = () => {
  const { userEmail } = getUserInfo() as any;
  const { data } = useUserQuery(userEmail);

  return (
    <Layout style={{ minHeight: "5vh" }}>
      <div style={{ padding: "16px", textAlign: "center" }}>
        <h1 style={{ textAlign: "left" }}>Welcome To Your Profile</h1>
        <Card
          style={{ width: 300, margin: "auto" }}
          cover={
            data?.data && data?.data?.profileImage ? (
              <Image
                width="auto"
                height="100%"
                alt="Profile"
                src={data?.data?.profileImage}
              />
            ) : (
              <UserOutlined style={{ fontSize: "48px" }} />
            )
          }
        ></Card>
        {data && (
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {data?.data?.name?.firstName} {data?.data?.name?.middleName}{" "}
            {data?.data?.name?.lastName}
          </p>
        )}
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
