import { Meta, StoryFn } from "@storybook/react";
import ListNumber, { ListNumberProps } from "./ListNumber";

export default {
  title: "Components/ListNumber",
  component: ListNumber,
} as Meta;

const Template: StoryFn<ListNumberProps> = (args) => <ListNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  index: "1",
  text: "ListNumber",
};
