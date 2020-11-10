import React from 'react';

import { arrayOf, string, shape } from 'prop-types';

import Image from '../Image/Image';

const CamperDetail = ({ images }) => {
  return (
    <div className="camperdetail__container">
      {images.map(image => (
        <Image
          key={image.id}
          url={image.attribues.url}
          alt={image.attributes.description}
          style=""
        />
      ))}
    </div>
  );
};

CamperDetail.propTypes = {
  images: arrayOf(
    shape({
      id: string.isRequired,
      attributes: shape({
        url: string.isRequired,
        description: string.isRequired,
      }).isRequired,
    }),
  ),
};

export default CamperDetail;
