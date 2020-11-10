import React from 'react';

import { string } from 'prop-types';

const Image = ({ url, name }) => {
  return <img src={url} className="image__container" alt={name} />;
};

Image.propTypes = {
  url: string,
  name: string,
};

export default Image;
