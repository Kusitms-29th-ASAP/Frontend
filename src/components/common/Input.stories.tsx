import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "@/components/common/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "입력해주세요.",
};
