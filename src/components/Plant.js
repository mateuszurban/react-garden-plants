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

  return (
    <div>
      <div className="plantWrapper">
        <li className="plantName">{name}</li>
        <li className="plantHarvest">{days} days to harvest</li>
        <li className="plantAction plantDelete" onClick={handlePlantDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </li>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Plant;
