"use client";

import { Button, Col, Row } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import SelectField from "../Forms/SelectField";
import { genderOptions, roleOptions } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Signup = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
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
            border: "1px solid",
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
        Sign Up
      </h1>

      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Row gutter={{ xs: 24, xl: 8, lg: 10, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="name.firstName"
                placeholder="First name"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="name.middleName"
                placeholder="Middle name"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="name.lastName"
                placeholder="Last name"
                size="large"
              />
            </Col>
          </Row>
          <Row gutter={{ xs: 24, xl: 8, lg: 10, md: 24 }}>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                size="large"
              />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                size="large"
              />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <SelectField
                name="role"
                label="Role"
                size="large"
                options={roleOptions}
              />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <SelectField
                name="gender"
                label="Gender"
                size="large"
                options={genderOptions}
              />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormDatePicker
                name="dateOfBirth"
                label="Date Of Birth"
                size="large"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="contactNo"
                placeholder="Contact No"
                size="large"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="emergencyContactNo"
                placeholder="Emergency Contact No"
                size="large"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="presentAddress"
                placeholder="Present Address"
                size="large"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="permanentAddress"
                placeholder="Permanent Address"
                size="large"
              />
            </Col>
          </Row>
        </div>
        <Button
          htmlType="submit"
          block
          style={{
            backgroundColor: "#508D4E",
            color: "#D6EFD8",
          }}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
