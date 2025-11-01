import type { Meta, StoryObj } from "@storybook/react";
import { CodeComparisonAccordion } from "./CodeComparisonAccordion";

const meta = {
  title: "Layout/CodeComparisonAccordion",
  component: CodeComparisonAccordion,
  args: {
    beforeLabel: "Before",
    afterLabel: "After",
    beforeCode: "const before = true;",
    afterCode: "const after = true;",
  },
} satisfies Meta<typeof CodeComparisonAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
