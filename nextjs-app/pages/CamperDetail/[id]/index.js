import React from 'react';
import { useRouter } from 'next/router';

// import ImageDetail from '../../../components/ImageDetail/ImageDetail';
import GetOne from '../../../utils/GetOne';

export default function index() {
  const router = useRouter();
  const { id } = router.query;
  const [data] = GetOne(id);
  console.log('data', data);

  return <div>{/* <ImageDetail images={} /> */}</div>;
}
