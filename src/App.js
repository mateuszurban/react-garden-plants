import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import './App.css';
import List from './components/List';
import Form from './components/Form';

function App() {
  // State-related:
  // Creates array of objects, to be displayed as a list. For now, it contains dummy objects, used in the List.js component.
  const [plants, setPlants] = useState([
    { name: 'tomato', days: 151, key: uniqid() },
    { name: 'pepper', days: 210, key: uniqid() },
    { name: 'spinach', days: 55, key: uniqid() },
  ]);

  const [formVisibility, setFormVisibility] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputDays, setInputDays] = useState('');

  //Local storage logic:
  // Load storage on start:
  useEffect(() => {
    getLocalStorage();
  }, []);

  // Save storage on [plants] change
  useEffect(() => {
    setLocalStorage();
  }, [plants]);

  // Load 'plants from local storage. If localStorage is empty - starts w/ empty array.
  const getLocalStorage = () => {
    if (localStorage.getItem('plants') === null) {
      localStorage.setItem('plants', JSON.stringify([]));
    } else {
      let storedData = JSON.parse(localStorage.getItem('plants'));
      setPlants(storedData);
    }
  };

  // Save 'plants' to local storage.
  const setLocalStorage = () => {
    localStorage.setItem('plants', JSON.stringify(plants));
  };

  // Toggles form visibility. Sets boolean 'formVisibility' value to the opposite.
  const toggleFormDisplay = () => {
    setFormVisibility(!formVisibility);
  };

  return (
    <div className="app">
      <h2>all plants:</h2>
      <List plants={plants} setPlants={setPlants} />
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
