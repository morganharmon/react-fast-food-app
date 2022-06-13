export default function DrinkDropdown({ setDrinkSelection }) {
  return (
    <div id="drink-dropdown-area">
      <select id="drink-dropdown" onChange={(e) => setDrinkSelection(e.target.value)}>
        <option value={'soda'}>Soda</option>
        <option value={'milk'}>Milk</option>
        <option value={'potato-carrot-juice'}>Potato-carrot juice</option>
      </select>
    </div>
  );
}