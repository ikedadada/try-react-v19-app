import type { Meta, StoryObj } from "@storybook/react";
import { RefBeforeForwardRef } from "./RefBeforeForwardRef";

const meta = {
  title: "Feature/RefBeforeForwardRef",
  component: RefBeforeForwardRef,
} satisfies Meta<typeof RefBeforeForwardRef>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
