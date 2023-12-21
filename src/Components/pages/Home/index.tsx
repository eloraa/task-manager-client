import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="px-8 py-6">
      <div className="text-lg">
        <h1>Effortless Productivity</h1>
        <h1>Your Ultimate Task Management Solution</h1>
        <Link to="/dashboard">
          <button className="py-2 px-8 bg-coconut-faded text-base font-semibold rounded-full mt-5 font-grotesk">Let&apos;s Explore</button>
        </Link>
        <figure className="w-full mt-10">
          <img src="/images/banner.png" alt="" />
        </figure>
      </div>
    </main>
  );
};
