import type { Meta, StoryObj } from "@storybook/react";
import { RefAfterRefProp } from "./RefAfterRefProp";

const meta = {
  title: "Feature/RefAfterRefProp",
  component: RefAfterRefProp,
} satisfies Meta<typeof RefAfterRefProp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
