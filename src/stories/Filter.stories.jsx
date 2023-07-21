/* eslint-disable no-console */
import React from 'react';
import Filter from '../components/Filter';

export default {
  title: 'Filter',
  component: Filter,
};

// Cerita untuk komponen "Filter" dengan kategori Tech terpilih
export function Default() {
  return (
    <Filter
      categories={['Tech', 'Science', 'Health', 'Sports']}
      selectedCategory="Tech"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
