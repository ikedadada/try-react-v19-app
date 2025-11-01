import type { Meta, StoryObj } from "@storybook/react";
import { InputBeforeForwardRef } from "./InputBeforeForwardRef";

const meta = {
  title: "Feature/InputBeforeForwardRef",
  component: InputBeforeForwardRef,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputBeforeForwardRef>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
