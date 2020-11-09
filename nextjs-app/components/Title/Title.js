import React from 'react';
import { string } from 'prop-types';

const Title = ({ title }) => {
  return <h1 className="mainpage__title">{title}</h1>;
};

Title.propTypes = {
  title: string.isRequired,
};

export default Title;
