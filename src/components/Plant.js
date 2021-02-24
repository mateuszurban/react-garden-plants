import React from 'react';
// Importing just one FA's icon for individual use. Advice is to set up proper global use, if more icons would be imported.
// More info: https://fontawesome.com/how-to-use/on-the-web/using-with/react#get-started
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Plant = ({ name, days, plants, setPlants, plant }) => {
  // This works like this:
  // Array 'plants' is filtered out. Each 'plant.key' is compared to this el's/plant's key. Everything that's NOT matching key - goes to new array. So, the only matching thing, element that's been just clicked on, stays out. Finally, 'setPlants' sets our new array as the only one that's still existing, and useEffect in App.js refreshes localStorage. This element is deleted.
  const handlePlantDelete = () => {
    const filterOut = plants.filter((el) => el.key !== plant.key);
    setPlants(filterOut);
  };

  // All time calculations are hidden in this function. It uses growth time and today's date to return an answer: how long do they have to wait, until plant's ready.
  // Probably needs refactoring, to use .getTime() instead of variables with milliseconds. Will complicate final rule, but will definitely clean up the code.
  const daysToHarvest = () => {
    // Growth time in milliseconds format. One day is 86 400 000 miliseconds.
    const growthTime = days * 86400000;

    // Planting date in milliseconds format.
    const datePlantedConverted = Date.parse(plant.datePlanted);

    // Harvest date in milliseconds format.
    const harvestDate = datePlantedConverted + growthTime;

    // Today's date in milliseconds format.
    const today = Date.now();

    // How many days until harvest?
    const daysLeft = (harvestDate - today) / 86400000;

    // Rounds up days, to display full number instead of decimals or zero.
    const daysLeftRoundedUp = Math.ceil(daysLeft);

    if (daysLeft < 1) {
      return `it's ready!`;
    } else {
      return daysLeftRoundedUp + ' days to harvest';
    }
  };

  return (
    <div>
      <div className="plantWrapper">
        <li className="plantName plantMainName">{name}</li>
        <li className="plantHarvest">{daysToHarvest()}</li>
        <li className="plantAction plantDelete" onClick={handlePlantDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </li>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Plant;
