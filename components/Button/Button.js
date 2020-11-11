import React from 'react';

import { string } from 'prop-types';

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
};

export default Button;
