"use client";

import { Button, Col, Row } from "antd";
import loginImage from "@/assets/login.svg";
import Image from "next/image";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      console.log(data);
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
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
            color: "#508D4E",
          }}
        >
          Login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                label="User Email"
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
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5px 0px",
              }}
            >
              <div style={{ marginLeft: "auto" }}>
                <Link
                  style={{ color: "#508D4E", fontWeight: "bold" }}
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              htmlType="submit"
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
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
    </Row>
  );
};

export default Login;
