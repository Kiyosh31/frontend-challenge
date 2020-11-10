import React from 'react';

import { string } from 'prop-types';

import Image from '../Image/Image';
import CamperInfo from '../CamperInfo/CamperInfo';
import Score from '../Score/Score';

const CamperItem = ({ id, city, state, type, name, price, score, votes, image }) => {
  return (
    <div className="camperitem__container">
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
  price: string.isRequired,
  score: string.isRequired,
  votes: string.isRequired,
  image: string.isRequired,
};

export default CamperItem;
