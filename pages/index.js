import React, { useState, useEffect } from 'react';

import Title from '../components/Title/Title';
import SearchBar from '../components/SearchBar/SearchBar';
import CampersList from '../components/CampersList/CampersList';
import Spinner from '../components/Spinner/Spinner';
import PaginationButton from '../components/PaginationButton/PaginationButton';

import instance from '../utils/instance';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState();
  const [limit, setLimit] = useState(10);
  const [type] = useState('camper-van');
  const [inputValue, setInputValue] = useState('');

  const fetchData = async () => {
    setLoading(true);

    const params = `?page[limit]=${limit}&filter[type]=${type}&address=san%20francisco`;
    const response = await instance.get(params);

    setData(response.data.data);
    setLimit(limit + 10);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [!data]);

  const inputChangedHandler = event => {
    setInputValue(event.target.value);
  };

  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    if (inputValue.length) {
      const params = encodeURI(
        `?filters[type]=${inputValue.toLowerCase()}&address=san%20francisco`,
      );
      const response = await instance.get(params);
      setSearchData(response.data.data);
      setInputValue('');
    } else if (!inputValue.length && searchData) {
      setSearchData();
    }

    setLoading(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8 mainpage__body">
      <Title title="Campervans" />
      <SearchBar
        inputChangedHandler={inputChangedHandler}
        submitHandler={submitHandler}
        inputValue={inputValue}
      />
      <CampersList dataList={searchData ? searchData : data} />
      {!searchData && <PaginationButton click={fetchData} />}
      {loading && <Spinner />}
    </div>
  );
}
