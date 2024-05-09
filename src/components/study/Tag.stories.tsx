import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tag, { TagProps } from "./Tag";

export default {
  title: "Study/Tag",
  component: Tag,
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "primary Tag",
  tagType: "primary",
};

export const Gray = Template.bind({});
Gray.args = {
  text: "gray Tag",
  tagType: "gray",
};
