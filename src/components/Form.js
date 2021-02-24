import React from 'react';
import uniqid from 'uniqid';

const Form = ({
  formVisibility,
  setFormVisibility,
  inputName,
  setInputName,
  inputDays,
  setInputDays,
  plants,
  setPlants,
  datePlanted,
  setDatePlanted,
  dateHarvest,
  setDateHarvest,
}) => {
  // Assigns new class, based on formVisibility.
  const getVisibility = formVisibility ? 'visible' : 'hidden';

  const handleCloseForm = () => {
    clearForm();
    setFormVisibility(false);
  };

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handleDaysChange = (event) => {
    setInputDays(event.target.value);
  };

  const handleDateChange = (event) => {
    setDatePlanted(event.target.value);
  };

  const handleFormSubmit = (event) => {
    // Prevents refresh.
    event.preventDefault();
    // Adds to 'plants' array with spread operator.
    setPlants([
      ...plants,
      {
        name: inputName,
        days: inputDays,
        datePlanted: datePlanted,
        key: uniqid(),
      },
    ]);
    // Deletes all input values from form.
    clearForm();
    // Closes the form.
    handleCloseForm();
  };

  // Clears all input fields:
  const clearForm = () => {
    setInputName('');
    setInputDays('');
    setDatePlanted('');
  };

  return (
    <div className={`form ${getVisibility}`}>
      <form className="formWrapper" onSubmit={handleFormSubmit}>
        <input
          className="formInput"
          onChange={handleNameChange}
          value={inputName}
          type="text"
          required
          placeholder="tomato"
        />
        <input
          className="formInput"
          onChange={handleDaysChange}
          value={inputDays}
          type="number"
          placeholder="120 days"
        />
        <input
          className="formInput"
          onChange={handleDateChange}
          value={datePlanted}
          type="date"
          placeholder="planted on..."
        />
        <div className="buttons">
          <button className="button closeForm" onClick={handleCloseForm}>
            cancel
          </button>
          <button className="button submitForm" type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
