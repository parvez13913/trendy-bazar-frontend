"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { UserOutlined } from "@ant-design/icons";

type IInput = {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  prefix?: string;
};

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  prefix,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? (
        <span
          style={{
            color: "#508D4E",
            fontWeight: "bold",
          }}
        >
          {label}
        </span>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              style={{}}
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              prefix={prefix ? <UserOutlined /> : ""}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;
