import { useMorseInput } from '../hooks/useMorseInput';
import MorseInput from './MorseInput';
import SignalDisplay from './SignalDisplay';

function MorseTrainer() {
  const { isPressing, inputSequence, handlePressStart, handlePressEnd } =
    useMorseInput();
  return (
    <div className='flex flex-col items-center justify-center'>
      <MorseInput
        isPressing={isPressing}
        onPressStart={handlePressStart}
        onPressEnd={handlePressEnd}
      />
      <SignalDisplay inputSequence={inputSequence} />
    </div>
  );
}

export default MorseTrainer;
