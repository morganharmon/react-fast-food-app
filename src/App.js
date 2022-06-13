import './App.css';
import React from 'react';
import OrderInput from './OrderInput.js';
import OrderDisplay from './OrderDisplay.js';
import ExtraInstructions from './ExtraInstructions.js';
import ExtraInstructionsDisplay from './ExtraInstructionsDisplay.js';
import FoodDropdown from './FoodDropdown.js';
import SideDropdown from './SideDropdown.js';
import DrinkDropdown from './DrinkDropdown.js';
import FoodImageDisplay from './FoodImageDisplay.js';
import SideImageDisplay from './SideImageDisplay.js';
import DrinkImageDisplay from './DrinkImageDisplay.js';
import { useState } from 'react';


function App() {
  const [orderInput, setOrderInput] = useState('');
  const [foodSelection, setFoodSelection] = useState('Burger');
  const [sideSelection, setSideSelection] = useState('Fries');
  const [drinkSelection, setDrinkSelection] = useState('Soda');
  const [instructions, setInstructions] = useState('');
  const [instructionsDisplay, setInstructionsDisplay] = useState('');

  return (
    <div className="App">
      <section id="input-area">
        <OrderInput orderInput={ orderInput } setOrderInput={ setOrderInput } />
        <div id="dropdowns">
          <FoodDropdown setFoodSelection={ setFoodSelection } />
          <SideDropdown setSideSelection={ setSideSelection } />
          <DrinkDropdown setDrinkSelection={ setDrinkSelection }/>
        </div>
        <ExtraInstructions instructions={ instructions } setInstructions={ setInstructions } setInstructionsDisplay={ setInstructionsDisplay } />
      </section>
      <section id="display-area">
        <OrderDisplay orderInput={ orderInput } />
        <div id="image-display-area">
          <FoodImageDisplay foodSelection={ foodSelection } />
          <SideImageDisplay sideSelection={ sideSelection } />
          <DrinkImageDisplay drinkSelection={ drinkSelection } />
        </div>
        <ExtraInstructionsDisplay instructionsDisplay={ instructionsDisplay } />
      </section>
    </div>
  );
}

export default App;
