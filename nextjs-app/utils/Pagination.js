import { useState, useEffect } from 'react';

import instace from './instance';

const Pagination = (initialType = '', initialFrom = 0, initialLimit = 10, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [type, setType] = useState(initialType);
  const [from, setFrom] = useState(initialFrom);
  const [limit, setLimit] = useState(initialLimit);

  const loadData = async () => {
    const params = `?page[limit]=${limit}&page[offset]=${
      from * limit
    }&filter[type]=${type}&address=san%20francisco`;

    instace
      .get(params)
      .then(response => {
        if (from === 0) {
          setData(response.data.data);
        } else if (response.data.data.length) {
          setData([...data, response.data.data]);
        } else {
          setData([]);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, [!data]);

  return [data, setData, from, setFrom, limit, setLimit, type, setType];
};

export default Pagination;
