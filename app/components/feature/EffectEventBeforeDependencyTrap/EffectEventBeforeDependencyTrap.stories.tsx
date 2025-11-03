import type { Meta, StoryObj } from "@storybook/react";
import { EffectEventBeforeDependencyTrap } from "./EffectEventBeforeDependencyTrap";

const meta = {
  title: "Feature/EffectEventBeforeDependencyTrap",
  component: EffectEventBeforeDependencyTrap,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EffectEventBeforeDependencyTrap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
