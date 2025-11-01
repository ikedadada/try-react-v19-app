import type { Meta, StoryObj } from "@storybook/react";
import { NameBeforeManualState } from "./NameBeforeManualState";

const meta = {
  title: "Feature/NameBeforeManualState",
  component: NameBeforeManualState,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NameBeforeManualState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
