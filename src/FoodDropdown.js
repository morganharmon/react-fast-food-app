export default function FoodDropdown({ setFoodSelection }) {
  return (
    <div id="food-dropdown-area">
      <select id="food-dropdown" onChange={(e) => setFoodSelection(e.target.value)}>
        <option value={1}>Burger</option>
        <option value={2}>Chicken</option>
        <option value={3}>Fish</option>
      </select>
    </div>
  );
}