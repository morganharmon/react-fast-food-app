export default function OrderInput({ orderInput, setOrderInput }) {
  return (
    <div>
      <input id="order-name-input" onChange={(e) => setOrderInput(e.target.value)} value={orderInput} />
    </div>
  );
}