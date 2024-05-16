import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const CardTimetable = Template.bind({});
CardTimetable.args = {
  sub: "1교시",
  main: "과목",
  color: "orange",
  type: "timetable",
};

export const CardWhiteDate = Template.bind({});
CardWhiteDate.args = {
  sub: "월",
  main: "18",
  color: "white",
  type: "date",
};

export const CardOrangeDate = Template.bind({});
CardOrangeDate.args = {
  sub: "월",
  main: "18",
  color: "orange",
  type: "date",
};
