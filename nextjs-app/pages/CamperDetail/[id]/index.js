import React from 'react';

import ImageDetail from '../../../components/ImageDetail/ImageDetail';
import CamperInfoDetail from '../../../components/CamperInfoDetail/CamperInfoDetail';
import OwnerInfo from '../../../components/OwnerInfo/OwnerInfo';
import Button from '../../../components/Button/Button';

import instance from '../../../utils/instance';
import { useRouter } from 'next/router';

const index = ({ camperImages, ownerInfo, info, price }) => {
  const router = useRouter();

  return (
    <div>
      <ImageDetail images={camperImages} />
      <CamperInfoDetail info={info} price={price} />
      <OwnerInfo ownerInfo={ownerInfo} />
      <Button type="button" text="Back" style="searchbar__button" click={() => router.push('/')} />
    </div>
  );
};

index.getInitialProps = async ({ query }) => {
  const { id } = query;
  const { data } = await instance.get(`/${id}`);
  const {
    relationships: { images, owner },
  } = data.data;
  const { included } = data;

  const filteredImages = included.filter(incl => {
    const image = images.data.find(image => image.id === incl.id);
    return image;
  });
  const camperImages = filteredImages.slice(0, 2);

  const ownerInfo = included.filter(incl => owner.data.id === incl.id)[0];

  const price = data.data.attributes.price_per_day.toString().split('00');

  return {
    camperImages: camperImages,
    ownerInfo: ownerInfo,
    info: data.data,
    price: price,
  };
};

export default index;
