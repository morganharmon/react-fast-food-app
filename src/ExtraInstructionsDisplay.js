import Instruction from './Instruction.js';

export default function ExtraInstructionsDisplay({ instructionsDisplay }) {
  return (
    <div id="extra-instructions-display-area">
      {
        instructionsDisplay.map((instruction, i) => <Instruction instruction={ instruction } key={instruction + i} />)
      }
    </div>
  );
}