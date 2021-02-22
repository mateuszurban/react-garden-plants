import React from 'react';

const Plant = ({ name, days }) => {
  return (
    <div>
      <div className="plantWrapper">
        <li className="plantName">{name}</li>
        <li className="plantHarvest">{days} days to harvest</li>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Plant;
