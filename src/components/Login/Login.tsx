"use client";

import { Button, Col, message, Row } from "antd";
import loginImage from "@/assets/login.svg";
import Image from "next/image";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const response = await userLogin({ ...data }).unwrap();
      console.log(response?.data?.accessToken);
      if (response?.data?.accessToken) {
        router.push("/profile");
        message.success("User is Logged in successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col
        sm={12}
        md={8}
        lg={8}
        style={{
          borderRadius: "10px",
          boxShadow:
            " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          padding: "2rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#508D4E",
          }}
        >
          <ShoppingCartOutlined
            style={{
              fontSize: "2rem",
              padding: "1.5rem",
              border: "2px solid",
              borderRadius: "100%",
              borderColor: "#508D4E",
            }}
          />
          <h4>Trendy Bazar</h4>
        </div>
        <h1
          style={{
            margin: "15px 0px",
            color: "#508D4E",
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="User Email"
                prefix="prefix"
                placeholder="Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <Link
                  style={{ color: "#508D4E", fontWeight: "bold" }}
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                <p>
                  <span style={{ color: "#508D4E", fontWeight: "bold" }}>
                    New to Trendy Bazar?
                  </span>{" "}
                  <Link
                    style={{ color: "red", fontWeight: "bold" }}
                    href="/signup"
                  >
                    Please Sign up
                  </Link>
                </p>
              </div>
            </div>
            <Button
              htmlType="submit"
              block
              type="text"
              style={{
                backgroundColor: "#508D4E",
                color: "#D6EFD8",
              }}
            >
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
