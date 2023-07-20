import React from 'react';
import VoteButton from '../components/VoteButton';

export default {
  title: 'VoteButton',
  component: VoteButton,
};

const Template = (args) => <VoteButton {...args} />;

export const UpVote = Template.bind({});
UpVote.args = {
  count: 1,
  type: 'up',
};

export const DownVote = Template.bind({});
DownVote.args = {
  count: 1,
  type: 'down',
};
