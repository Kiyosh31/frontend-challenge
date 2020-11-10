import { useState, useEffect } from 'react';

import instace from './instance';

const GetOne = camperId => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const id = parseInt(camperId);
    const data = await instace.get(`/${id}`);
    console.log('data', data);
    setData(data);
  };

  useEffect(() => {
    loadData();
  }, [!data]);

  return [data, setData];
};

export default GetOne;
