import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Button',
    type: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
    type: 'secondary'
  },
};

export const Warning: Story = {
  args: {
    text: 'Button',
    type: 'warning'
  },
};

export const Danger: Story = {
  args: {
    text: 'Button',
    type: 'danger'
  },
};
