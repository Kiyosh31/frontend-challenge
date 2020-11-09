import React from 'react';

import { string } from 'prop-types';

const Image = ({ url }) => {
  return <img src={url} className="image__container" alt="prueba" />;
};

Image.propTypes = {
  url: string.isRequired,
};

export default Image;
