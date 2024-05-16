import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Image from "next/image";
import Button, { ButtonProps } from "@/components/common/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  type: "primary",
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  text: "Primary Light Button",
  type: "primaryLight",
};

export const PrimaryBorder = Template.bind({});
PrimaryBorder.args = {
  text: "Primary Border Button",
  type: "primaryBorder",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  text: "Primary Button",
  type: "primary",
  icon: <Image src={"/icon-192x192.png"} alt="아이콘" width={24} height={24} />,
};
