import { Meta, StoryFn } from "@storybook/react";
import SummaryCard from "./SummaryCard";

export default {
  title: "News/SummaryCard",
  component: SummaryCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

interface Line {
  keywords: string[];
  summaries: string[];
}

interface AnnouncementsProps {
  type?: "school" | "eduOffice";
  summaryType?: "simple" | "detail";
  isNew: boolean;
  category: string;
  title: string;
  uploadDate: string;
  imageUrls?: string[];
  highlight?: Line;
  summary?: string[];
  announcementId?: number;
}

const Template: StoryFn<AnnouncementsProps> = (args) => (
  <SummaryCard {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  type: "school",
  summaryType: "simple",
  isNew: true,
  category: "Category",
  title: "Simple SummaryCard",
  uploadDate: "date",
  highlight: {
    keywords: ["키워드1", "키워드2"],
    summaries: ["요약1", "요약2", "요약3"],
  },
  announcementId: 0,
};

export const Detail = Template.bind({});
Detail.args = {
  type: "school",
  summaryType: "detail",
  isNew: true,
  category: "Category",
  title: "Detail SummaryCard",
  uploadDate: "date",
  highlight: {
    keywords: ["키워드1", "키워드2"],
    summaries: ["요약1", "요약2", "요약3"],
  },
  announcementId: 0,
};
