import type { Meta, StoryObj } from "@storybook/react";
import { UpdateNameAfter } from "./updateNameAfter";

const meta = {
  title: "Feature/UpdateNameAfter",
  component: UpdateNameAfter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateNameAfter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
