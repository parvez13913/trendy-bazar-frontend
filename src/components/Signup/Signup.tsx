"use client";

import { Button, Col, message, Row } from "antd";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import SelectField from "../Forms/SelectField";
import { genderOptions, roleOptions } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";
import UploadImage from "../ui/UploadImage";
import {
  useAddCustomerMutation,
  useAddSellerMutation,
} from "@/redux/api/userApi";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [addSeller] = useAddSellerMutation();
  const [addCustomer] = useAddCustomerMutation();
  const router = useRouter();
  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    try {
      if (values?.role === "seller") {
        const response = await addSeller(formData).unwrap();
        if (!!response?.data?.email) {
          router.push("/profile");
          message.success("Seller created successfully");
        }
      } else if (values?.role === "customer") {
        const response = await addCustomer(formData).unwrap();
        if (!!response?.data?.email) {
          router.push("/profile");
          message.success("Customer created successfully");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
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
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                size="large"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <SelectField
                name="role"
                label="Role"
                size="large"
                options={roleOptions}
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <SelectField
                name="gender"
                label="Gender"
                size="large"
                options={genderOptions}
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormDatePicker
                name="dateOfBirth"
                label="Date Of Birth"
                size="large"
              />
            </Col>
            <Col span={12} style={{ margin: "10px 0" }}>
              <FormInput
                name="contactNo"
                label="contactNo"
                placeholder="Contact No"
                size="large"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <UploadImage name="file" />
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
