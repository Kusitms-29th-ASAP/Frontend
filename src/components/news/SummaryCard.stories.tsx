import { Meta, StoryFn } from "@storybook/react";
import SummaryCard, { SummaryCardProps } from "./SummaryCard";

export default {
  title: "News/SummaryCard",
  component: SummaryCard,
} as Meta;

const Template: StoryFn<SummaryCardProps> = (args) => <SummaryCard {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  summaryType: "simple",
  isNew: true,
  category: "Category",
  title: "Simple SummaryCard",
  date: "date",
  look: 123,
  keyword: ["keyword1", "keyword2"],
  sentence: ["sentence1", "sentence2", "sentence3"],
  summaryId: 0,
};

export const Detail = Template.bind({});
Detail.args = {
  summaryType: "detail",
  isNew: true,
  category: "Category",
  title: "Detail SummaryCard",
  date: "date",
  look: 123,
  keyword: ["keyword1", "keyword2"],
  sentence: ["sentence1", "sentence2", "sentence3"],
  summaryId: 0,
};
