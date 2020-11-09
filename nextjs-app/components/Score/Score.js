import React from 'react';
import StarsRating from 'react-rating-stars-component';

const Score = () => {
  return (
    <div className="score__container">
      <p className="score__price">$180</p>
      <StarsRating count={5} half size={21} edit={false} color="#ffd700" />{' '}
      <p className="score__rating">(12)</p>
    </div>
  );
};

export default Score;
