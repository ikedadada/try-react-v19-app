import type { Meta, StoryObj } from "@storybook/react";
import { ActivityAfterActivityBoundary } from "./ActivityAfterActivityBoundary";

const meta = {
  title: "Feature/ActivityAfterActivityBoundary",
  component: ActivityAfterActivityBoundary,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ActivityAfterActivityBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
