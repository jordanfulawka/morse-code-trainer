import { useMorseInput } from '../hooks/useMorseInput';
import MorseInput from './MorseInput';
import SignalDisplay from './SignalDisplay';

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
      <SignalDisplay sequence={sequence} />
    </div>
  );
}

export default MorseTrainer;
