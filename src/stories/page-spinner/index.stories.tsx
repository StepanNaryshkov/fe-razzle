import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {IPageSpinner, PageSpinner} from '../../components/page-spinner/component';

export default {
  title: 'Example/PageSpinner',
  component: PageSpinner,
} as Meta;

const Template: Story<IPageSpinner> = (args) => <PageSpinner {...args} />;

export const Active = Template.bind({});
Active.args = {
  isFetching: true,
};
