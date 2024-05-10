import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Checkbox, { CheckBoxProps } from "@/components/common/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckBoxProps> = (args) => <Checkbox {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
  label: "Default Checkbox",
  checkboxType: "checkbox",
};

export const CheckArrow = Template.bind({});
CheckArrow.args = {
  label: "Check Arrow",
  checkboxType: "checkArrow",
};

export const CheckButton = Template.bind({});
CheckButton.args = {
  label: "Check Button",
  checkboxType: "checkBtn",
};
