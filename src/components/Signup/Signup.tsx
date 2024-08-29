"use client";

import { Button, Col, Row } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import SelectField from "../Forms/SelectField";
import { genderOptions } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";

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
          <Row>
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
          </Row>
        </div>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
