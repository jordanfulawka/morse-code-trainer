import { useEffect, useRef, useState } from 'react';

function App() {
  const pressStart = useRef(0);
  const [output, setOutput] = useState('');

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Space') {
        pressStart.current = performance.now();
      }
    };

    const onKeyUp = (e) => {
      if (e.code === 'Space') {
        const duration = performance.now() - pressStart.current;
        const symbol = duration < 200 ? '.' : '-';
        setOutput((prev) => prev + symbol);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <h1>hello</h1>
      <p>Hold spacebar to input Morse</p>
      <div>{output}</div>
    </div>
  );
}

export default App;
