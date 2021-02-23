import React, { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  // Creates array of objects, to be displayed as a list. For now, it contains dummy objects, used in the List.js component.
  const [plants, setPlants] = useState([
    { name: 'tomato', days: 151, key: uniqid() },
    { name: 'pepper', days: 210, key: uniqid() },
    { name: 'spinach', days: 55, key: uniqid() },
  ]);
  const [formVisibility, setFormVisibility] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputDays, setInputDays] = useState('');

  // Toggles form visibility. Sets boolean 'formVisibility' value to the opposite.
  const toggleFormDisplay = () => {
    setFormVisibility(!formVisibility);
  };

  return (
    <div className="app">
      <h2>all plants:</h2>
      <List plants={plants} />
      <div className="inputWrapper">
        <button className="button showForm" onClick={toggleFormDisplay}>
          new
        </button>
      </div>
      <Form
        formVisibility={formVisibility}
        setFormVisibility={setFormVisibility}
        inputName={inputName}
        setInputName={setInputName}
        inputDays={inputDays}
        setInputDays={setInputDays}
        plants={plants}
        setPlants={setPlants}
      />
    </div>
  );
}

export default App;
