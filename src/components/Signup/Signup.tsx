"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import signupImage from "@/assets/signup.svg";

const Signup = () => {
  const onSubmit = async (data: any) => {
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
      <Col sm={12} md={16} lg={10}>
        <Image src={signupImage} width={500} alt="signup image" />
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
          Signup
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
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                <p>
                  <span style={{ color: "#508D4E", fontWeight: "bold" }}>
                    Already Have an Account?
                  </span>{" "}
                  <Link
                    style={{ color: "red", fontWeight: "bold" }}
                    href="/login"
                  >
                    Please Login
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
              Signup
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Signup;
