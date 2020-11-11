import React from 'react';
import { string } from 'prop-types';

const CamperInfo = ({ type, city, state, name }) => {
  return (
    <div className="camperinfo__container">
      <p className="camper__info-text">
        {type} &#8226; {city}, {state}
      </p>
      <p className="camper__info-name">{name}</p>
    </div>
  );
};

CamperInfo.propTypes = {
  type: string.isRequired,
  city: string.isRequired,
  state: string.isRequired,
  name: string.isRequired,
};

export default CamperInfo;
