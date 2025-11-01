import type { Meta, StoryObj } from "@storybook/react";
import { OptimisticCommentList } from "./optimisticCommentList";

const meta = {
  title: "Feature/OptimisticCommentList",
  component: OptimisticCommentList,
} satisfies Meta<typeof OptimisticCommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
