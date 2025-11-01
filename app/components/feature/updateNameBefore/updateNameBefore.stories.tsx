import type { Meta, StoryObj } from "@storybook/react";
import { UpdateNameBefore } from "./updateNameBefore";

const meta = {
  title: "Feature/UpdateNameBefore",
  component: UpdateNameBefore,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UpdateNameBefore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
