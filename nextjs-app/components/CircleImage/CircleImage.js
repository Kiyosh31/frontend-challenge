import React from 'react';

import { string } from 'prop-types';

const CircleImage = ({ url, name }) => {
  return <img src={url} className="cirle__image" alt={name} />;
};

CircleImage.propTypes = {
  url: string,
  name: string,
};

export default CircleImage;
