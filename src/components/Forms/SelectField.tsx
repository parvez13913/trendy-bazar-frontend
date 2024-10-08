"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  value: string;
  label: string;
};
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
};

const SelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
  handleChange,
}: SelectFieldProps) => {
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
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default SelectField;
