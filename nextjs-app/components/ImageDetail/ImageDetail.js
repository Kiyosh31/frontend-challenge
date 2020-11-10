import React from 'react';

import { arrayOf, shape, string } from 'prop-types';

import Image from '../Image/Image';

const ImageDetail = ({ images }) => {
  return (
    <div className="imagedetail__container">
      {images.map(image => (
        <Image key={image.id} url={image.attributes.url} alt={image.attributes.description} />
      ))}
    </div>
  );
};

ImageDetail.propTypes = {
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

export default ImageDetail;
