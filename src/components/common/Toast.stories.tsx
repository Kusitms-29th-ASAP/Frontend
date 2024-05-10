import { Meta, StoryFn } from "@storybook/react";
import ListNumber, { ListNumberProps } from "./ListNumber";
import Toast, { ToastProps } from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
} as Meta;

const Template: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: "basic",
  message: "ToastMsg",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  message: "ToastMsg",
};
