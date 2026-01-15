import { useCallback, useRef, useState } from 'react';

export function useMorseInput() {
  const pressStart = useRef(0);
  const [sequence, setSequence] = useState('');
  const [isPressing, setIsPressing] = useState(false);

  const handlePressStart = useCallback(() => {
    pressStart.current = performance.now();
    setIsPressing(true);
  }, []);

  const handlePressEnd = useCallback(() => {
    const duration = performance.now() - pressStart.current;
    const symbol = duration < 200 ? '.' : '-';
    setSequence((prev) => prev + symbol);
    setIsPressing(false);
  }, []);

  return {
    isPressing,
    handlePressStart,
    handlePressEnd,
    sequence,
  };
}
