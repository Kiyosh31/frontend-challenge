import React from 'react';

import { string, number } from 'prop-types';
import { useRouter } from 'next/router';

import Image from '../Image/Image';
import CamperInfo from '../CamperInfo/CamperInfo';
import Score from '../Score/Score';

const CamperItem = ({ id, city, state, type, name, price, score, votes, image }) => {
  const router = useRouter();
  return (
    <div className="camperitem__container" onClick={() => router.push(`/CamperDetail/${id}`)}>
      <Image url={image} />
      <div className="camperinfo__container">
        <CamperInfo id={id} type={type} city={city} state={state} name={name} />
        <Score price={price} score={score} votes={votes} />
      </div>
    </div>
  );
};

CamperItem.propTypes = {
  id: string.isRequired,
  city: string.isRequired,
  state: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  score: number.isRequired,
  votes: number.isRequired,
  image: string.isRequired,
};

export default CamperItem;
