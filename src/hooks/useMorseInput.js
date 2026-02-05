import { useCallback, useEffect, useRef, useState } from 'react';

export function useMorseInput() {
  const pressStart = useRef(0);
  const [inputSequence, setInputSequence] = useState('');
  const [isPressing, setIsPressing] = useState(false);
  const isKeyDown = useRef(false);

  const handlePressStart = () => {
    if (isKeyDown.current) return;
    isKeyDown.current = true;
    console.log('handle press start caled', performance.now());
    pressStart.current = performance.now();
    setIsPressing(true);
  };

  const handlePressEnd = useCallback(() => {
    if (!isKeyDown.current) return;
    isKeyDown.current = false;
    console.log('handle press end caled', performance.now());
    const duration = performance.now() - pressStart.current;
    const symbol = duration < 150 ? '.' : '-';
    setInputSequence((prev) => prev + symbol);
    setIsPressing(false);
  }, []);

  const resetInput = () => {
    setInputSequence('');
  };

  useEffect(() => {
    const down = (e) => e.code === 'Space' && handlePressStart();
    const up = (e) => e.code === 'Space' && handlePressEnd();

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, [handlePressEnd]);

  return {
    isPressing,
    handlePressStart,
    handlePressEnd,
    inputSequence,
    resetInput,
  };
}
