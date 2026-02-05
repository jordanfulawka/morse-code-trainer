import { Link } from 'react-router-dom';

function PracticeHome() {
  return (
    <div className='flex flex-col'>
      <p>What would you like to practice?</p>
      <Link to='/practice/alphabet'>Alphabet</Link>
      <Link>Upload my own text</Link>
    </div>
  );
}

export default PracticeHome;
