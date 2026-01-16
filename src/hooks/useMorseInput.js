import { useCallback, useEffect, useRef, useState } from 'react';

export function useMorseInput() {
  const pressStart = useRef(0);
  const [inputSequence, setInputSequence] = useState('');
  const [isPressing, setIsPressing] = useState(false);

  const handlePressStart = useCallback(() => {
    pressStart.current = performance.now();
    setIsPressing(true);
  }, []);

  const handlePressEnd = useCallback(() => {
    const duration = performance.now() - pressStart.current;
    const symbol = duration < 200 ? '.' : '-';
    setInputSequence((prev) => prev + symbol);
    setIsPressing(false);
  }, []);

  useEffect(() => {
    const down = (e) => e.code === 'Space' && handlePressStart();
    const up = (e) => e.code === 'Space' && handlePressEnd();

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  return {
    isPressing,
    handlePressStart,
    handlePressEnd,
    inputSequence,
  };
}
