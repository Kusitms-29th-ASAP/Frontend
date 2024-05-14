import React from "react";
import { Meta } from "@storybook/react";
import Topbar from "@/components/common/Topbar";

export default {
  component: Topbar,
  title: "Components/Topbar",
} satisfies Meta<typeof Topbar>;

export const Default = () => <Topbar text="상단바" />;

export const WithIcon = () => <Topbar text="상단바" icon={true} />;
