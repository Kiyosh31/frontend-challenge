import React from 'react';

import Image from '../Image/Image';
import CamperInfo from '../CamperInfo/CamperInfo';
import Score from '../Score/Score';

const CamperItem = () => {
  return (
    <div className="camperitem__container">
      <Image url="https://res.cloudinary.com/outdoorsy/image/upload/v1599614308/p/rentals/185306/images/mcc3nlflmztp9d4dlome.jpg" />
      <div className="camperinfo__container">
        <CamperInfo type="tipo" city="ciudad" state="estado" name="nombre" />
        <Score />
      </div>
    </div>
  );
};

CamperItem.propTypes = {};

export default CamperItem;
