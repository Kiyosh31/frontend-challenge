import React from 'react';

import Title from '../components/Title/Title';
import SearchBar from '../components/SearchBar/SearchBar';
import CampersList from '../components/CampersList/CampersList';
import Spinner from '../components/Spinner/Spinner';
import PaginationButton from '../components/PaginationButton/PaginationButton';

import Pagination from '../utils/Pagination';

export default function Home() {
  const [data, from, setFrom, loading] = Pagination('camper-van', 0, 10, [], true);

  return (
    <div className="max-w-screen-xl mx-auto mt-8 mainpage__body">
      <Title title="Campervans" />
      <SearchBar />
      <CampersList dataList={data} />
      {!loading && <PaginationButton click={() => setFrom(from + 1)} />}
      {loading && <Spinner />}
    </div>
  );
}
