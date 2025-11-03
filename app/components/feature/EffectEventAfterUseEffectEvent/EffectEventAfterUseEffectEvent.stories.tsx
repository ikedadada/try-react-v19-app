import type { Meta, StoryObj } from "@storybook/react";
import { EffectEventAfterUseEffectEvent } from "./EffectEventAfterUseEffectEvent";

const meta = {
  title: "Feature/EffectEventAfterUseEffectEvent",
  component: EffectEventAfterUseEffectEvent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EffectEventAfterUseEffectEvent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
