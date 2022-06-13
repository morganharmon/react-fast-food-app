export default function FoodImageDisplay({ foodSelection }) {
  return (
    <div>
      <img src={`/food-selection-${foodSelection}.jpg`} />
    </div>
  );
}