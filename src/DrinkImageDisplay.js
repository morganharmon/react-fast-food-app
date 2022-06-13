export default function DrinkImageDisplay({ drinkSelection }) {
  return (
    <div id="drink-image-display-area">
      <img src={`/${drinkSelection}.jpg`} />
    </div>
  );
}