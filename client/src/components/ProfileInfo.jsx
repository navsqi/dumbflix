import React from 'react';

const ProfileInfo = (props) => {
  return (
    <div className="profile-info mb-3">
      <img src={`/images/icon/${props.icon}`} alt="" />
      <div className="profile-control ml-4">
        <p className="title mb-0">{props.info}</p>
        <p className="subtitle mb-0">{props.label}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
