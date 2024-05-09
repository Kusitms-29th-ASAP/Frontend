import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomInput, { CustomInputProps } from "@/components/common/CustomInput";

export default {
  title: "Components/CustomInput",
  component: CustomInput,
  argTypes: {
    placeholder: { control: "text" },
  },
} as Meta;

const Template: StoryFn<CustomInputProps> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return <CustomInput {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "입력해주세요.",
};

export const Select = Template.bind({});
Select.args = {
  placeholder: "선택해주세요.",
  inputType: "select",
};
