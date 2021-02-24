import React from 'react';
import Plant from './Plant';

const List = ({ plants, setPlants }) => {
  const mapOverPlantList = plants.map((plant) => (
    <Plant
      name={plant.name}
      days={plant.days}
      key={plant.key}
      plants={plants}
      setPlants={setPlants}
      id={plant.key}
      plant={plant}
    />
  ));
  return (
    <div className="plantsList">
      <div className="plantsListKey">
        <li className="plantName">name</li>
        <li className="plantHarvest">harvest</li>
        <li className="plantAction"></li>
      </div>
      <ul>{mapOverPlantList}</ul>
    </div>
  );
};

export default List;
