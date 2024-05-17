import { Meta, StoryFn } from "@storybook/react";
import Popup, { PopupProps } from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
} as Meta;

const Template: StoryFn<PopupProps> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Popup Title",
  height: "200px",
  children: "Context",
  noPadding: false,
};
