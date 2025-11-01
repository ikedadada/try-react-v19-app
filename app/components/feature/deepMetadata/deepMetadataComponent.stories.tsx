import type { Meta, StoryObj } from "@storybook/react";
import { DeepMetadataComponent } from "./deepMetadataComponent";

const meta = {
  title: "Feature/DeepMetadataComponent",
  component: DeepMetadataComponent,
} satisfies Meta<typeof DeepMetadataComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
