import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "./SectionTitle";

const meta = {
  title: "Layout/SectionTitle",
  component: SectionTitle,
  args: {
    title: "Section title",
    description: "Section description",
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
