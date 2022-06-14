import './App.css';
import React from 'react';
import OrderInput from './OrderInput.js';
import OrderNameDisplay from './OrderNameDisplay.js';
import ExtraInstructions from './ExtraInstructions.js';
import ExtraInstructionsDisplay from './ExtraInstructionsDisplay.js';
import FoodDropdown from './FoodDropdown.js';
import SideDropdown from './SideDropdown.js';
import DrinkDropdown from './DrinkDropdown.js';
import ImageDisplay from './ImageDisplay.js';
import { useState } from 'react';


function App() {
  const [orderInput, setOrderInput] = useState('');
  const [foodSelection, setFoodSelection] = useState('Burger');
  const [sideSelection, setSideSelection] = useState('Fries');
  const [drinkSelection, setDrinkSelection] = useState('Soda');
  const [instructions, setInstructions] = useState('');
  const [instructionsDisplay, setInstructionsDisplay] = useState(['']);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInstructionsDisplay([...instructionsDisplay, 'Extra instructions: ' + instructions]);
  };
  return (
    <div className="App">
      <section id="input-area">
        <OrderInput orderInput={ orderInput } setOrderInput={ setOrderInput } />
        <div id="dropdowns">
          <label>Choose your items: </label>
          <FoodDropdown setFoodSelection={ setFoodSelection } />
          <SideDropdown setSideSelection={ setSideSelection } />
          <DrinkDropdown setDrinkSelection={ setDrinkSelection }/>
        </div>
        <div id="instructions">
          <label id="instructions-label">Enter any extra instructions: </label>
          <ExtraInstructions handleSubmit={ handleSubmit } instructions={ instructions } setInstructions={ setInstructions } />
        </div>
      </section>
      <hr></hr>
      <section id="display-area">
        <OrderNameDisplay orderInput={ orderInput } />
        <div id="image-display-area">
          <ImageDisplay foodSelection={ foodSelection } sideSelection={ sideSelection } drinkSelection={ drinkSelection } />
        </div>
        <ExtraInstructionsDisplay instructionsDisplay={ instructionsDisplay } />
      </section>
    </div>
  );
}

export default App;
