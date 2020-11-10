import React from 'react';

import { func, string } from 'prop-types';

const Button = ({ type, text, click, style }) => {
  return (
    <button type={type} onClick={click} className={style}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: string.isRequired,
  text: string.isRequired,
  click: func.isRequired,
};

export default Button;
