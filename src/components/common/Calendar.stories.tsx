import { Meta, StoryFn } from "@storybook/react";
import Calendar, { CalendarProps } from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
} as Meta;

const Template: StoryFn<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "",
  onChange: (value: string) => console.log(value),
};
