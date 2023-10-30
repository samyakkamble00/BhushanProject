import React from 'react';
import './Sub.css'
const Sub = () => {
  const array = [
    { id: 1, sub: 'Html', star: 3 },
    { id: 2, sub: 'Css', star: 3 },
    { id: 3, sub: 'JavaScript', star: 3 },
    { id: 4, sub: 'BootStrap', star: 3 },
    { id: 5, sub: 'React-Bootstrap', star: 3 },
  ];
  return (
    <div id='sub' >
      {array.map(({ id, sub, star }) => (
        <div key={id} id='sub1'>
          <h3>{sub}</h3>
          <h6>{star}</h6>
        </div>
      ))}
    </div>
  );
};

export default Sub;
