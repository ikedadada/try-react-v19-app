import type { Meta, StoryObj } from "@storybook/react";
import { CommentsBeforeManualRollback } from "./optimisticCommentListBefore";

const meta = {
  title: "Feature/CommentsBeforeManualRollback",
  component: CommentsBeforeManualRollback,
} satisfies Meta<typeof CommentsBeforeManualRollback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
