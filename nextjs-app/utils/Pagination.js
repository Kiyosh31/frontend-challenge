import { useState, useEffect } from 'react';

import instace from './instance';

const Pagination = (initialType = '', initialFrom = 0, initialLimit = 10, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [type] = useState(initialType);
  const [from] = useState(initialFrom);
  const [limit] = useState(initialLimit);

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
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return [data, from, limit];
};

export default Pagination;
