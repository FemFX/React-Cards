import React from 'react';

export default function Person(props) {
  const url = `https://randomuser.me/api/portraits/thumb/men/`;
  return (
    <div className="person">
      <img src={`${url}${props.img}.jpg`} alt="User" />
      <h4>{props.name}</h4>
      <h4>{props.job}</h4>
    </div>
  );
}
