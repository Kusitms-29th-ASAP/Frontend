import { Meta, StoryFn } from "@storybook/react";
import ListBox, { ListBoxProps } from "./ListBox";

export default {
  title: "Components/ListBox",
  component: ListBox,
} as Meta;

const Template: StoryFn<ListBoxProps> = (args) => <ListBox {...args} />;

export const DefaultOrange = Template.bind({});
DefaultOrange.args = {
  listboxType: "none",
  color: "orange",
  time: "기간",
  text: "ListBox",
};

export const DefaultMint = Template.bind({});
DefaultMint.args = {
  listboxType: "none",
  color: "mint",
  time: "기간",
  text: "ListBox",
};

export const CheckOrange = Template.bind({});
CheckOrange.args = {
  listboxType: "check",
  color: "orange",
  time: "기간",
  text: "ListBox",
  type: "타입",
};

export const CheckMint = Template.bind({});
CheckMint.args = {
  listboxType: "check",
  color: "mint",
  time: "기간",
  text: "ListBox",
  type: "타입",
};

export const DirectMint = Template.bind({});
DirectMint.args = {
  listboxType: "direct",
  color: "mint",
  time: "기간",
  text: "ListBox",
};
