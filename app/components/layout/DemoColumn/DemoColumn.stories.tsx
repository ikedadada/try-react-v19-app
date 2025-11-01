import type { Meta, StoryObj } from "@storybook/react";
import { DemoColumn } from "./DemoColumn";

const meta = {
  title: "Layout/DemoColumn",
  component: DemoColumn,
  args: {
    label: "Before React 19",
    variant: "before",
    children: (
      <div className="rounded-md border border-dashed border-muted-foreground/40 p-4">
        Demo Content
      </div>
    ),
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["before", "after"],
    },
    children: { control: false },
  },
} satisfies Meta<typeof DemoColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BeforeVariant: Story = {
  args: {
    label: "Before React 19",
    variant: "before",
  },
};

export const AfterVariant: Story = {
  args: {
    label: "After React 19",
    variant: "after",
  },
};
