import type { Meta, StoryObj } from "@storybook/react";
import { InputAfterRefProp } from "./InputAfterRefProp";

const meta = {
  title: "Feature/InputAfterRefProp",
  component: InputAfterRefProp,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputAfterRefProp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
