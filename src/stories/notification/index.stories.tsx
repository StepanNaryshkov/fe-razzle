import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Notification, INotification} from '../../components/notification/component';

export default {
  title: 'Example/Notification',
  component: Notification,
} as Meta;

const Template: Story<INotification> = (args) => <Notification {...args} />;

export const Active = Template.bind({});
Active.args = {
  isOpened: true,
  message: 'Test',
  onClose: () => {},
  toggleNotification: () => {},
};
