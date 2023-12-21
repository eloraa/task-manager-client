import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="md:px-8 px-4 py-6 flex items-center justify-between max-md:flex-wrap">
      <h1 className="p-3 bg-blue-main text-coconut-fadedv2 stroke-[3] stroke-coconut-faded">
        <Link to="/">
          <div className="w-6 h-6">
            <svg viewBox="0 0 100 100">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.1346 12.75V34.1346V36.4808H12.75V12.75H34.1346ZM34.1346 40.4808H12.75H8.75V36.4808V12.75V8.75H12.75H34.1346H36.4808H38.1346H40.4808H59.5192H61.8654H63.5192H65.8654H87.25H91.25V12.75V36.4808V40.4808H87.25H65.8654V59.5192V61.8654V63.5192V65.8654V87.25V91.25H61.8654H38.1346H34.1346V87.25V65.8654V63.5192V61.8654V59.5192V40.4808ZM61.8654 40.4808H59.5192H40.4808H38.1346V59.5192H61.8654V40.4808ZM59.5192 12.75H40.4808V34.1346H59.5192V12.75ZM65.8654 36.4808H87.25V12.75H65.8654V34.1346V36.4808ZM61.8654 65.8654H38.1346V87.25H61.8654V65.8654Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
      </h1>
      <ul className="flex items-center gap-4 ml-auto md:mr-4">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-main font-semibold' : 'font-semibold')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-main font-semibold' : 'font-semibold')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/plans" className={({ isActive }) => (isActive ? 'text-blue-main font-semibold' : 'font-semibold')}>
            Plans
          </NavLink>
        </li>
      </ul>
      <div className='max-md:w-full max-md:mt-4'>
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-main font-semibold max-md:w-full' : 'font-semibold max-md:w-full')}>
          <button className="py-2 px-4 rounded-full bg-coconut-faded w-full">Let&apos; Explore</button>
        </NavLink>
      </div>
    </header>
  );
};
