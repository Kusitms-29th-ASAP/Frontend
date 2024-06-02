import { Meta, StoryFn } from "@storybook/react";
import DateSelect, { DateSelectProps } from "./DateSelect";

export default {
  title: "School/DateSelect",
  component: DateSelect,
} as Meta;

const Template: StoryFn<DateSelectProps> = (args) => <DateSelect {...args} />;

export const Week = Template.bind({});
Week.args = {
  type: "week",
};
