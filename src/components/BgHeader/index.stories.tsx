import { Meta, Story } from '@storybook/react';

import { BgHeader } from '.';

export default {
  title: 'BgHeader',
  component: BgHeader,
  args: {
    user: 'Pedro',
    props: {
      message: 15,
      photos: 12,
      videos: 14,
      fans: 54,
      posts: 152,
      reliable: 3,
      cool: 3,
      sexy: 2
    }
  }
} as Meta;

export const Default: Story = args => {
  return <BgHeader user="Pedro" {...args} />;
};
