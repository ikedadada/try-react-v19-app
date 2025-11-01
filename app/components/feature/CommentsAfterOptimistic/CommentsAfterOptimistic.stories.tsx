import type { Meta, StoryObj } from "@storybook/react";
import { CommentsAfterOptimistic } from "./CommentsAfterOptimistic";

const meta = {
  title: "Feature/CommentsAfterOptimistic",
  component: CommentsAfterOptimistic,
} satisfies Meta<typeof CommentsAfterOptimistic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
