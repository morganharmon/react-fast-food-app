export default function ImageDisplay({ foodSelection, sideSelection, drinkSelection }) {
  return (
    <div id="images-container">
      <div id="image">
        <img src={`/${foodSelection}.jpg`} />
      </div>
      <div id="image">
        <img src={`/${sideSelection}.jpg`} />
      </div>
      <div id="image">
        <img src={`/${drinkSelection}.jpg`} />
      </div>
    </div>
  );
}