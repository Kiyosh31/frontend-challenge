import { useState, useEffect } from 'react';

import instace from './instance';

const Pagination = (initialType = '', initialFrom = 0, initialLimit = 10, initialData = []) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [type] = useState(initialType);
  const [from, setFrom] = useState(initialFrom);
  const [limit] = useState(initialLimit);

  const loadData = async () => {
    setLoading(true);
    const params = `?page[limit]=${limit}&page[offset]=${
      from * limit
    }&filter[type]=${type}&address=san%20francisco`;

    const response = await instace.get(params);

    if (from === 0) {
      setData(response.data.data);
    } else if (data.length) {
      setData([...data, response.data.data]);
    } else {
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [!data]);

  return [data, from, setFrom, loading];
};

export default Pagination;
