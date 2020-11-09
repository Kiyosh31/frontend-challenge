import React from 'react';

import Title from '../components/Title/Title';
import SearchBar from '../components/SearchBar/SearchBar';
import CampersList from '../components/CampersList/CampersList';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 mainpage__body">
      <Title title="Campervans" />
      <SearchBar />
      <CampersList />
    </div>
  );
}
