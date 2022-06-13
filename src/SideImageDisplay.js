export default function SideImageDisplay({ sideSelection }) {
  return (
    <div id="side-image-display-area">
      <img src={`/${sideSelection}.jpg`} />
    </div>
  );
}