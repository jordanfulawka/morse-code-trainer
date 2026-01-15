import { useMorseInput } from '../hooks/useMorseInput';
import MorseInput from './MorseInput';
import SignelDisplay from './SignelDisplay';

function MorseTrainer() {
  const { isPressing, sequence, handlePressStart, handlePressEnd } =
    useMorseInput();
  return (
    <div>
      <MorseInput
        isPressing={isPressing}
        onPressStart={handlePressStart}
        onPressEnd={handlePressEnd}
      />
      <SignelDisplay sequence={sequence} />
    </div>
  );
}

export default MorseTrainer;
