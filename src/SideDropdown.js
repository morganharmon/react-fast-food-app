export default function SideDropdown({ setSideSelection }) {
  return (
    <div className="item-dropdown-area">
      <select className="dropdown" onChange={(e) => setSideSelection(e.target.value)}>
        <option value={'Fries'}>Fries</option>
        <option value={'Mashed-potatoes'}>Mashed potatoes</option>
        <option value={'Potato'}>Potato</option>
      </select>
    </div>
  );
}