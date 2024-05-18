import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomTextarea, {
  CustomTextareaProps,
} from "@/components/common/CustomTextarea";

export default {
  title: "Components/CustomTextarea",
  component: CustomTextarea,
  argTypes: {
    placeholder: { control: "text" },
  },
} as Meta;

const Template: StoryFn<CustomTextareaProps> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return <CustomTextarea {...args} value={value} onChange={handleChange} />;
};

export const Text = Template.bind({});
Text.args = {
  placeholder: "입력해주세요.",
};
