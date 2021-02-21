import React from 'react';

const Plant = ({ name, days }) => {
  return (
    <div>
      <li>
        {name}, {days} days to harvest
      </li>
    </div>
  );
};

export default Plant;
