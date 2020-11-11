import React from 'react';
import { useRouter } from 'next/router';

import CircleImage from '../CircleImage/CircleImage';
import Button from '../Button/Button';

const OwnerInfo = ({ ownerInfo }) => {
  const router = useRouter();

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
      <Button type="button" text="Back" style="searchbar__button" click={() => router.push('/')} />
    </div>
  );
};

export default OwnerInfo;
