import React from 'react';
import { action } from '@storybook/addon-actions';
import LoginInput from '../components/LoginInput';

export default {
  title: 'Components/LoginInput',
  component: LoginInput,
};

// Cerita untuk komponen "LoginInput" dengan aksi ketika tombol "Masuk" diklik
export const Default = () => (
  <LoginInput login={action('Login clicked')} />
);
