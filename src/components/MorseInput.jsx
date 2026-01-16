// import { useEffect } from 'react';

function MorseInput({ isPressing, onPressStart, onPressEnd }) {
  // useEffect(() => {
  //   const down = (e) => e.code === 'Space' && onPressStart();
  //   const up = (e) => e.code === 'Space' && onPressEnd();

  //   window.addEventListener('keydown', down);
  //   window.addEventListener('keyup', up);

  //   return () => {
  //     window.removeEventListener('keydown', down);
  //     window.removeEventListener('keyup', up);
  //   };
  // }, []);

  return (
    <button
      className={`bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transform active:scale-95 transition-transform duration-150
        ${isPressing ? 'bg-red-600' : ''}`}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
    >
      Press
    </button>
  );
}

export default MorseInput;
