import React from 'react';
import { string, shape, arrayOf } from 'prop-types';

import Circle from '../Circle/Circle';

const CamperInfoDetail = ({ info, price }) => {
  return (
    <div className="camperinfodetail__container">
      <div className="infocontainer">
        <p className="camper__detailinfo-text">
          {info.attributes.display_vehicle_type} &#8226; {info.attributes.location.city},{' '}
          {info.attributes.location.state}
        </p>
        <p className="camper__detailinfo-name">{info.attributes.vehicle_model}</p>
      </div>
      <Circle text={price} />
    </div>
  );
};

CamperInfoDetail.propTypes = {
  infp: arrayOf(
    shape({
      attributes: shape({
        location: shape({
          city: string,
          state: string,
        }),
        type: string,
        name: string,
      }),
    }),
  ),
  price: string.isRequired,
};

export default CamperInfoDetail;
