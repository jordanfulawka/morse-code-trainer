import { useEffect } from 'react';
import { MORSE_MAP } from '../lib/MorseMap';

function Prompt({ index, inputSequence, setIndex, resetInput }) {
  const entries = Object.entries(MORSE_MAP);
  const [key, value] = entries[index];
  const chars = value.split('');

  useEffect(() => {
    if (inputSequence.length === chars.length) {
      if (inputSequence === value) {
        setIndex((prev) => prev + 1);
      }
      resetInput();
    }
  }, [inputSequence, chars, value, setIndex, entries.length, resetInput]);
  return (
    <>
      <h1 className='text-6xl font-bold'>{key}</h1>

      <h1 className='text-6xl font-bold'>
        {chars.map((char, charIndex) => {
          const userInput = inputSequence[charIndex];
          let className = '';

          if (userInput === undefined) {
            className = '';
          } else if (userInput === char) {
            className = 'text-green-500';
          } else {
            className = 'text-red-500';
          }

          return (
            <span key={charIndex} className={className}>
              {char}
            </span>
          );
        })}
      </h1>
    </>
  );
}

export default Prompt;
