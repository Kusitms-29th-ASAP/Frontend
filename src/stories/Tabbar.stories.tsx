import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabbar from "./Tabbar";

export default {
  component: Tabbar,
  title: "Components/Tabbar",
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabbar>;

export const Default = () => <Tabbar />;
