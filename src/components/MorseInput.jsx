import { useEffect } from 'react';

function MorseInput({ isPressing, onPressStart, onPressEnd }) {
  console.log('morse input!');
  useEffect(() => {
    const down = (e) => e.code === 'Space' && onPressStart();
    const up = (e) => e.code === 'Space' && onPressEnd();

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  return (
    <button
      className={`w-32 h-32 rounded-full ${
        isPressing ? 'bg-blue-600' : 'bg-blue-300'
      }`}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
    >
      PRESS HERE
    </button>
  );
}

export default MorseInput;
