import type { Meta, StoryObj } from "@storybook/react";
import { ActivityBeforeManualToggle } from "./ActivityBeforeManualToggle";

const meta = {
  title: "Feature/ActivityBeforeManualToggle",
  component: ActivityBeforeManualToggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ActivityBeforeManualToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
