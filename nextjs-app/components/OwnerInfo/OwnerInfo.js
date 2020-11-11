import React from 'react';

import CircleImage from '../CircleImage/CircleImage';

const OwnerInfo = ({ ownerInfo }) => {
  return (
    <div className="ownerinfo__container">
      <CircleImage
        key={ownerInfo.id}
        url={ownerInfo.attributes.avatar_url}
        alt={ownerInfo.attributes.first_name}
      />
      <p className="owner__name">
        {ownerInfo.attributes.first_name + ' ' + ownerInfo.attributes.last_name}
      </p>
    </div>
  );
};

export default OwnerInfo;
