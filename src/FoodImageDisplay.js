export default function FoodImageDisplay({ foodSelection }) {
  return (
    <div id="food-div">
      <img src={`/${foodSelection}.jpg`} />
    </div>
  );
}