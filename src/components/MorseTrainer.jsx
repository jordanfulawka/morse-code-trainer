import { useState } from 'react';
import { useMorseInput } from '../hooks/useMorseInput';
import MorseInput from './MorseInput';
import SignalDisplay from './SignalDisplay';
import Prompt from './Prompt';

function MorseTrainer() {
  const {
    isPressing,
    inputSequence,
    handlePressStart,
    handlePressEnd,
    resetInput,
  } = useMorseInput();

  const [index, setIndex] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center'>
      <Prompt
        index={index}
        inputSequence={inputSequence}
        setIndex={setIndex}
        resetInput={resetInput}
      />
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
