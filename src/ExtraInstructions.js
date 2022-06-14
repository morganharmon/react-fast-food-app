export default function ExtraInstructions({ instructions, setInstructions, setInstructionsDisplay }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setInstructionsDisplay('Extra instructions: ' + instructions);
  };
  return (
    <div id="extra-instructions-input-area">
      <form id="extra-instructions-form" onSubmit={handleSubmit}>
        <textarea id="extra-instructions-input" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <button id="button">Submit</button>
      </form>
    </div>
  );
}