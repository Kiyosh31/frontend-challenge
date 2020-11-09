import React from 'react';

import { func, string } from 'prop-types';

const Button = ({ type, text, click }) => {
  return (
    <button type={type} onClick={click} className="searchbar__button">
      {text}
    </button>
  );
};

Button.prototypes = {
  type: string.isRequired,
  text: string.isRequired,
  click: func,
};

export default Button;
