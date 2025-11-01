import type { Meta, StoryObj } from "@storybook/react";
import { OptimisticCommentListBefore } from "./optimisticCommentListBefore";

const meta = {
  title: "Feature/OptimisticCommentListBefore",
  component: OptimisticCommentListBefore,
} satisfies Meta<typeof OptimisticCommentListBefore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
