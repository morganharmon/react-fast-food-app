export default function FoodImageDisplay({ foodSelection }) {
  return (
    <div>
      <img src={`/${foodSelection}.jpg`} />
    </div>
  );
}