import React from 'react';
import Plant from './Plant';

const List = ({ plants }) => {
  const mapOverPlantList = plants.map((plants) => (
    <Plant name={plants.name} days={plants.days} key={plants.key} />
  ));
  return (
    <div className="plantsList">
      <div className="plantsListKey">
        <li className="plantName">name</li>
        <li className="plantHarvest">harvest</li>
      </div>
      <ul>{mapOverPlantList}</ul>
    </div>
  );
};

export default List;
