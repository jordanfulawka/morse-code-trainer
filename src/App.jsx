import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MorseTrainer from './components/MorseTrainer';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import PracticeHome from './pages/PracticeHome';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/practice',
        element: <PracticeHome />,
      },
      {
        path: '/practice/alphabet',
        element: <MorseTrainer />,
      },
    ],
  },
]);

function App() {
  return (
    // <div className='bg-zinc-600 text-gray-900 h-screen flex flex-col justify-center'>
    // </div>
    <RouterProvider router={router} />
    // <MorseTrainer />
  );
}

export default App;
