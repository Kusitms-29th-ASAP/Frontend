import { Meta, StoryFn } from "@storybook/react";
import More, { MoreProps } from "./More";

export default {
  component: More,
  title: "Components/More",
} as Meta;

const Template: StoryFn<MoreProps> = (args) => <More {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "자세히 보기",
  onClick: () => {},
  moreType: "default",
};

export const Text = Template.bind({});
Text.args = {
  text: "텍스트",
  onClick: () => {},
  moreType: "text",
};
