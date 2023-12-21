import { Link } from 'react-router-dom';
import { Header } from '../Header';

export const NotFound = () => {
  return (
    <>
      <Header></Header>
      <main className="py-36 text-center">
        <h1 className='mb-6 text-6xl font-bold font-mono'>404</h1>
        <Link to="/">
          <button className="px-8 py-2 rounded-full bg-blue-main text-coconut-fadedv2 font-bold">Go To Homepage</button>
        </Link>
      </main>
    </>
  );
};
