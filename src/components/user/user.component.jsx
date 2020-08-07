import React from 'react';
import './user.styles.css';

const UserItem = ({ id, name }) => {
  return (
    <div id={id} className="user-name">
      <h1>{name}</h1>
    </div>
  );
};

export default UserItem;
