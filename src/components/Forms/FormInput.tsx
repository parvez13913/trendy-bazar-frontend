"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type IInput = {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  lable?: string;
};

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  lable,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {lable ? lable : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            type={type}
            size={size}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;
