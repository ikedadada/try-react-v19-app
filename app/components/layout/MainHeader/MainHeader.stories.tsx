import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { MainHeader } from "./MainHeader";

const meta = {
  title: "Layout/MainHeader",
  component: MainHeader,
} satisfies Meta<typeof MainHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/"]}>
      <MainHeader />
    </MemoryRouter>
  ),
};

export const Version19_2: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/v19-2"]}>
      <MainHeader />
    </MemoryRouter>
  ),
};
