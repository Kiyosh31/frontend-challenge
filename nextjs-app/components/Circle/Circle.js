import React from 'react';

const Circle = ({ text }) => {
  return (
    <div className="circle__container">
      <p className="circle__text">${text}</p>
    </div>
  );
};

export default Circle;
