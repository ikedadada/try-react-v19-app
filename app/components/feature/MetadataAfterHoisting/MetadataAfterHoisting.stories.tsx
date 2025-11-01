import type { Meta, StoryObj } from "@storybook/react";
import { MetadataAfterHoisting } from "./MetadataAfterHoisting";

const meta = {
  title: "Feature/MetadataAfterHoisting",
  component: MetadataAfterHoisting,
} satisfies Meta<typeof MetadataAfterHoisting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
