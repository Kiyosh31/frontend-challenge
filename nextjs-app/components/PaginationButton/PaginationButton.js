import React from 'react';

import { func } from 'prop-types';

import Button from '../Button/Button';

const PaginationButton = ({ click }) => {
  return (
    <div className="paginationbutton__container">
      <Button type="button" text="Load More" style="paginationbutton__button" click={click} />
    </div>
  );
};

PaginationButton.propTypes = {
  click: func.isRequired,
};

export default PaginationButton;
