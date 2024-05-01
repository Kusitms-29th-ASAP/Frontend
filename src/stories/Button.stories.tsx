import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import home from "../../public/icon-192x192.png";
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
  buttonType: "primary",
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  text: "Primary Light Button",
  buttonType: "primaryLight",
};

export const PrimaryBorder = Template.bind({});
PrimaryBorder.args = {
  text: "Primary Border Button",
  buttonType: "primaryBorder",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  text: "Primary Button",
  buttonType: "primary",
  icon: <Image src={home} alt="아이콘" width={24} height={24} />,
};
