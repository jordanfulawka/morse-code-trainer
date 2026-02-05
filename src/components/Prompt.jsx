import { useEffect } from 'react';
import { MORSE_MAP } from '../lib/MorseMap';

function Prompt({ index, inputSequence, setIndex, resetInput }) {
  const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const morse = text.split('').map((char) => {
    return MORSE_MAP[char.toLowerCase()];
  });
  const chars = morse[index].split('');

  useEffect(() => {
    if (inputSequence.length === chars.length) {
      if (inputSequence === morse[index]) {
        setIndex((prev) => prev + 1);
      }
      resetInput();
    }
  }, [inputSequence, chars, setIndex, resetInput, index, morse]);

  console.log(index);
  return (
    <>
      <h1 className='text-6xl font-bold'>{text[index]}</h1>

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
