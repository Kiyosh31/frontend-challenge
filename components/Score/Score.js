import React, { useState, useEffect } from 'react';
import { number } from 'prop-types';

import StarsRating from 'react-rating-stars-component';

const Score = ({ price, score, votes }) => {
  const [formatedScore, setFormatedScore] = useState(null);
  const [formatedPrice, setFormatedPrice] = useState(null);

  useEffect(() => {
    setFormatedScore(score / 20);
  }, []);

  useEffect(() => {
    const formatWord = price.toString().split('00');
    setFormatedPrice(formatWord);
  }, []);

  return (
    <div className="score__container">
      <p className="score__price">${formatedPrice}</p>
      <StarsRating
        count={5}
        half={true}
        size={22}
        value={formatedScore}
        edit={false}
        color="#808080"
        activeColor="#ffd700"
      />{' '}
      <p className="score__rating">({votes})</p>
    </div>
  );
};

Score.propTypes = {
  price: number.isRequired,
  score: number.isRequired,
  votes: number.isRequired,
};

export default Score;
