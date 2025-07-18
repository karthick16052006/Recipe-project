import React from "react";

const UserCard = ({ name }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
    </div>
  );
};

export default UserCard;
