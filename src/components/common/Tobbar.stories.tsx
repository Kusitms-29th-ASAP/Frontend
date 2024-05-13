import React from "react";
import { Meta } from "@storybook/react";
import Tobbar from "@/components/common/Tobbar";

export default {
  component: Tobbar,
  title: "Components/Tobbar",
} satisfies Meta<typeof Tobbar>;

export const Default = () => <Tobbar text="상단바" />;

export const WithIcon = () => <Tobbar text="상단바" icon={true} />;
