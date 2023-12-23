import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { Loader } from '../../utils/Loader';

export const NotFound = () => {
  return (
    <>
      <Header></Header>
      <main className="flex items-center flex-col justify-center text-center h-full pb-24">
        <div className="mb-6 text-6xl font-bold font-grotesk flex items-center gap-1">
          <h1>4</h1>
          <Loader className="-z-10 static scale-50 [&_*]:rounded-[2.3rem] bg-transparent"></Loader>
          <h1>4</h1>
        </div>
        <Link to="/">
          <button className="px-8 py-2 rounded-full bg-red-600 text-coconut-fadedv2 font-bold">Go To Homepage</button>
        </Link>
      </main>
    </>
  );
};
