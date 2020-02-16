import React from 'react';
import Person from './Person';
import data from '../data';

export default function PersonList() {
  const peoples = data;
  return (
    <div>
      {peoples.map(item => (
          <Person  name={item.name} job={item.job} img={item.img} />
      ))}
    </div>
  );
}
