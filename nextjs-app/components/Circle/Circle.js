import React from 'react';

import { string } from 'prop-types';

const Circle = ({ text }) => {
  return (
    <div className="circle__container">
      <p className="circle__text">${text}</p>
    </div>
  );
};

Circle.propTypes = {
  text: string.isRequired,
};

export default Circle;
