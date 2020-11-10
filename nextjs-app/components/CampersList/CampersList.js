import React from 'react';

import { shape, arrayOf, string, number, oneOfType } from 'prop-types';

import CamperItem from '../CamperItem/CamperItem';

const CampersList = ({ dataList }) => {
  return (
    <div className="campers__container">
      {dataList.map(camper => (
        <CamperItem
          key={camper.id}
          id={camper.id}
          city={camper.attributes.location.city}
          state={camper.attributes.location.state}
          type={camper.attributes.display_vehicle_type}
          name={camper.attributes.vehicle_model}
          price={camper.attributes.price_per_day}
          score={camper.attributes.rental_score}
          votes={camper.attributes.reviews_num}
          image={camper.attributes.primary_image_url}
        />
      ))}
    </div>
  );
};

CampersList.propTypes = {
  dataList: arrayOf(
    shape({
      id: oneOfType([string, number]).isRequired,
      attributes: shape({
        location: shape({
          city: string,
          state: string,
        }),
        type: string,
        name: string,
        price: number,
        score: number,
        votes: number,
        image: string,
      }),
    }),
  ),
};

export default CampersList;
