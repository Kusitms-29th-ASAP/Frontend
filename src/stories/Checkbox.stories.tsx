import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Checkbox, { CheckBoxProps } from "@/components/common/Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckBoxProps> = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (args.onChange) {
      args.onChange(e);
    }
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Default Checkbox",
};

export const CheckButton = Template.bind({});
CheckButton.args = {
  label: "Check Button",
  checkboxType: "checkBtn",
};
