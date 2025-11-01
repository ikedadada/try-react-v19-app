import { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LegacyInputBefore } from "./refLegacyInput";

const WithRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <LegacyInputBefore
      ref={ref}
      placeholder="forwardRef を使った従来のパターン"
    />
  );
};

const meta = {
  title: "Feature/LegacyInputBefore",
  component: LegacyInputBefore,
  parameters: {
    layout: "centered",
  },
  render: () => <WithRef />,
} satisfies Meta<typeof LegacyInputBefore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
