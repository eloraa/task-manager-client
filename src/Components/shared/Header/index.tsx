import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';

export const Header = () => {
  const [popup, setPopup] = useState(false);
  const { user, signOutUser } = useContext(AuthContext) as AuthContextProps;
  return (
    <header className="px-8 py-6 flex items-center justify-between z-20">
      <h1 className="p-3 bg-blue-main text-coconut-fadedv2 stroke-[3] stroke-coconut-faded">
        <Link to="/">
          <div className="w-6 h-6">
            <svg viewBox="0 0 100 100">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.1346 12.75V34.1346V36.4808H12.75V12.75H34.1346ZM34.1346 40.4808H12.75H8.75V36.4808V12.75V8.75H12.75H34.1346H36.4808H38.1346H40.4808H59.5192H61.8654H63.5192H65.8654H87.25H91.25V12.75V36.4808V40.4808H87.25H65.8654V59.5192V61.8654V63.5192V65.8654V87.25V91.25H61.8654H38.1346H34.1346V87.25V65.8654V63.5192V61.8654V59.5192V40.4808ZM61.8654 40.4808H59.5192H40.4808H38.1346V59.5192H61.8654V40.4808ZM59.5192 12.75H40.4808V34.1346H59.5192V12.75ZM65.8654 36.4808H87.25V12.75H65.8654V34.1346V36.4808ZM61.8654 65.8654H38.1346V87.25H61.8654V65.8654Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
      </h1>
      <ul className="flex items-center gap-4 ml-auto md:mr-4 text-sm">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-main font-medium' : 'font-medium')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-main font-medium' : 'font-medium')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/plans" className={({ isActive }) => (isActive ? 'text-blue-main font-medium' : 'font-medium')}>
            Plans
          </NavLink>
        </li>
      </ul>
      {user ? (
        <div className="relative flex items-center justify-center">
          <button
            onBlur={() => setTimeout(() => setPopup(false), 200)}
            onClick={() => setPopup(!popup)}
            className="w-8 h-8 overflow-hidden rounded-full transition-colors border-2 border-transparent focus:border-black max-md:ml-4"
          >
            <figure className="w-full h-full">
              <img src={user?.photoURL || ''} alt="" />
            </figure>
          </button>
          {popup && (
            <div className="absolute top-full max-md:w-screen pl-16 right-0 z-10 mt-4">
              <div className="bg-white py-4 border border-black/15 drop-shadow shadow-black/15 text-sm">
                <h1 className="px-6 whitespace-nowrap overflow-hidden text-ellipsis md:pr-20 mt-3">{user?.email}</h1>
                <ul className="mt-4 font-medium">
                  <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'bg-coconut-faded' : ''} px-6 py-2 block transition-colors hover:bg-coconut-faded`} to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => `${isActive ? 'bg-coconut-faded' : ''} px-6 py-2 block transition-colors hover:bg-coconut-faded`} to="/setting">
                      Setting
                    </NavLink>
                  </li>
                  <li className="border-b border-black/15 mx-6 my-1"></li>
                  <li>
                    <button onClick={signOutUser} className="px-6 py-2 transition-colors text-left hover:bg-coconut-faded w-full">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-main font-medium max-md:w-full' : 'font-medium max-md:w-full')}>
            <button className="ml-2 w-full transition-colors hover:bg-black/15 active:text-black border-b border-black border-dashed text-sm">Login</button>
          </NavLink>
        </div>
      )}
    </header>
  );
};
