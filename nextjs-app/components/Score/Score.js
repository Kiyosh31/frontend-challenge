import React from 'react';
import StarsRating from 'react-rating-stars-component';

const Score = ({ price, score, votes }) => {
  return (
    <div className="score__container">
      <p className="score__price">{price}</p>
      <StarsRating count={5} half size={21} value={score * 5} edit={false} color="#ffd700" />{' '}
      <p className="score__rating">({votes})</p>
    </div>
  );
};

export default Score;
