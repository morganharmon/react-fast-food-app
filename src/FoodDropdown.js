export default function FoodDropdown({ setFoodSelection }) {
  return (
    <div className="item-dropdown-area">
      <select className="dropdown" onChange={(e) => setFoodSelection(e.target.value)}>
        <option value={'Burger'}>Burger</option>
        <option value={'Chicken'}>Chicken Sandwich</option>
        <option value={'potato-sandwich'}>Potato Sandwich</option>
      </select>
    </div>
  );
}