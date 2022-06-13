export default function FoodDropdown({ setFoodSelection }) {
  return (
    <div id="food-dropdown-area">
      <select id="food-dropdown" onChange={(e) => setFoodSelection(e.target.value)}>
        <option value={'Burger'}>Burger</option>
        <option value={'Chicken'}>Chicken</option>
        <option value={'Fish'}>Fish</option>
      </select>
    </div>
  );
}