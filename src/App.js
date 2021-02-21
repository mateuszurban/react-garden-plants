import React, { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import List from './components/List';

function App() {
  // Creates array of objects, to be displayed as a list. For now, it contains dummy objects, used in the List.js component.
  const [plants, setPlants] = useState([
    { name: 'tomato', days: 151, key: uniqid() },
    { name: 'pepper', days: 210, key: uniqid() },
    { name: 'spinach', days: 55, key: uniqid() },
  ]);
  return (
    <div>
      <List plants={plants} />
    </div>
  );
}

export default App;
