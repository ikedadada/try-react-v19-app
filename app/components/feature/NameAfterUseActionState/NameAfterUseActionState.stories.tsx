import type { Meta, StoryObj } from "@storybook/react";
import { NameAfterUseActionState } from "./NameAfterUseActionState";

const meta = {
  title: "Feature/NameAfterUseActionState",
  component: NameAfterUseActionState,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NameAfterUseActionState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
