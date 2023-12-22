import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';

export const Plans = () => {
  const { user } = useContext(AuthContext) as AuthContextProps;
  return (
    <main className="px-8 py-10">
      <div className="text-center">
        <h1 className="font-grotesk text-2xl font-medium">Task mastery nade Simple</h1>
        <p className="max-md:text-sm mt-2">Select the Perfect Plan for Seamless Organization and Efficiency</p>
      </div>
      <div className="mt-4 flex justify-center max-md:px-4">
        <div className="p-8 bg-coconut-fadedv2 rounded-xl relative mt-10 max-md:w-full">
          <div className="flex px-2 pr-3 font-medium py-0.5 bg-lime-300 rounded-full  md:text-xs text-sm items-center absolute right-0 top-0 translate-x-7 -translate-y-2">
            <figure className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                <path
                  d="M19.25 16c-1.21 0-1.75-.54-1.75-1.75v-.75H16v.75c0 1.21-.54 1.75-1.75 1.75h-.75v1.5h.75c1.21 0 1.75.54 1.75 1.75V20h1.5v-.75c0-1.21.54-1.75 1.75-1.75H20V16h-.75ZM16.5 9.5C12.8 9.5 11 7.7 11 4H9.5c0 3.7-1.8 5.5-5.5 5.5V11c3.7 0 5.5 1.8 5.5 5.5H11c0-3.7 1.8-5.5 5.5-5.5V9.5Zm-6.25 3.3a5.421 5.421 0 0 0-2.55-2.55 5.422 5.422 0 0 0 2.55-2.55 5.421 5.421 0 0 0 2.55 2.55 5.421 5.421 0 0 0-2.55 2.55Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </figure>
            <h4>Best value</h4>
          </div>
          <div className="flex gap-2 items-center font-medium">
            <figure className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                <path
                  d="M14.9 11.508A4.822 4.822 0 0 0 15.5 9c0-2.542-1.275-4-3.5-4S8.5 6.458 8.5 9a4.822 4.822 0 0 0 .6 2.508A4.25 4.25 0 0 0 5 15.75V19h14v-3.25a4.25 4.25 0 0 0-4.1-4.242ZM12 6.5c.931 0 2 .284 2 2.5s-1.069 2.5-2 2.5-2-.284-2-2.5 1.069-2.5 2-2.5Zm5.5 11h-11v-1.75A2.753 2.753 0 0 1 9.25 13h5.5a2.753 2.753 0 0 1 2.75 2.75v1.75Z"
                  fill="currentColor"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </figure>
            <h4>For personal use</h4>
          </div>
          <div className="font-grotesk mt-4 font-semibold">
            <h1 className="text-xl">Free</h1>
            <h4>$0.00 / Month</h4>
          </div>
          {user ? (
            <h4 className='mt-4 text-rose-700 font-semibold'>Your current plan</h4>
          ) : (
            <Link to="/login" state="/plans">
              <button className="mt-4 py-4 rounded px-6 bg-blue-main text-white font-grotesk font-bold flex max-md:w-full justify-between md:gap-20 transition-transform active:scale-y-95">
                Sign up now
                <figure className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                    <path d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </figure>
              </button>
            </Link>
          )}

          <ul className="mt-10 grid gap-4 text-sm font-medium">
            <li className="flex items-center gap-1">
              <figure className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.852 8.937v7.523l-2.438 3.6-2.439-3.6V6.147c0-.59.248-1.147.678-1.552.428-.403.998-.62 1.582-.62h.353a2.267 2.267 0 0 1 1.589.623c.428.404.675.96.675 1.549v1.29h3.288v4.582h-1.5V8.937H8.852Zm-2.25-3.462a.767.767 0 0 1 .539.207l.005.005a.63.63 0 0 1 .206.46v1.29H5.475v-1.29a.63.63 0 0 1 .206-.46.808.808 0 0 1 .554-.212h.367ZM5.475 8.937V16l.939 1.385L7.352 16V8.937H5.475Zm9.618 6.613c-.213.074-.528.248-.94.549-.475.347-.997.802-1.52 1.289-.449.418-.886.848-1.284 1.24l-.188.184c-.43.423-.836.817-1.122 1.043l-.93-1.178c.209-.164.547-.49 1.002-.936l.184-.181c.398-.391.85-.836 1.316-1.27a18.965 18.965 0 0 1 1.656-1.402c.522-.381 1.111-.74 1.67-.845l.012-.002.012-.002c.34-.053.724-.025 1.054.203.331.228.476.566.535.85.109.526-.012 1.163-.142 1.673-.097.379-.22.768-.337 1.114a20.88 20.88 0 0 0 1.056-.684l.066-.045.11-.073a1.302 1.302 0 0 1 .883-.214c.328.048.553.239.69.435a1.6 1.6 0 0 1 .21.469c.02.066.045.167.064.245l.024.091a.968.968 0 0 0 .087.244.6.6 0 0 0 .206-.004l1.302-.358.398 1.447-1.381.38-.039.006c-.575.095-1.098.003-1.491-.355-.305-.278-.436-.639-.506-.88l-.045.03c-.266.178-.618.409-.974.619-.342.202-.736.414-1.072.527-.15.05-.397.12-.655.085a.912.912 0 0 1-.511-.241.895.895 0 0 1-.27-.555 1.21 1.21 0 0 1 .022-.357 3.1 3.1 0 0 1 .067-.268c.05-.176.122-.387.196-.603l.027-.08c.145-.427.306-.899.42-1.346.096-.378.137-.66.138-.843Zm4.15 2.79s.005 0 .012.005c-.01-.003-.012-.006-.012-.006Z"
                    fill="currentColor"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </figure>
              Task Creation and Management
            </li>
            <li className="flex items-center gap-1">
              <figure className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                  <path d="M11 11H9v1.5h3.5v-5H11V11Z" fill="currentColor" vectorEffect="non-scaling-stroke"></path>
                  <path
                    d="M11.75 4C6.535 4 4 6.535 4 11.75s2.535 7.75 7.75 7.75 7.75-2.535 7.75-7.75S16.965 4 11.75 4Zm0 14c-4.322 0-6.25-1.927-6.25-6.25 0-4.322 1.928-6.25 6.25-6.25 4.323 0 6.25 1.928 6.25 6.25 0 4.323-1.927 6.25-6.25 6.25Z"
                    fill="currentColor"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </figure>
              Deadline Tracking
            </li>
            <li className="flex items-center gap-1">
              <figure className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24" role="presentation" focusable="false">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 15.5h5.25L9 14H4.5v-1.352a2.128 2.128 0 0 1 2.125-2.125h4.174l.736-1.473c.186-.492.26-1.043.26-1.618 0-1.063-.254-2.047-.995-2.72C10.08 4.06 9.215 4 8.75 4c-.465 0-1.33.059-2.05.713-.74.672-.995 1.656-.995 2.719 0 .587.077 1.15.271 1.65A3.628 3.628 0 0 0 3 12.646V15.5Zm7.296-8.068c0 .838-.198 1.319-.485 1.59-.299.284-.694.342-1.061.342s-.762-.058-1.061-.341c-.286-.272-.484-.753-.484-1.591 0-1.713.826-1.932 1.545-1.932.72 0 1.546.22 1.546 1.932ZM21.01 20H9.532v-2.85a3.622 3.622 0 0 1 2.967-3.559c-.193-.497-.27-1.058-.27-1.642 0-1.061.254-2.044.994-2.715.72-.654 1.583-.712 2.048-.712.464 0 1.327.058 2.047.712.74.671.994 1.654.994 2.715 0 .584-.077 1.145-.27 1.642a3.622 3.622 0 0 1 2.968 3.559V20Zm-7.859-4.968a2.122 2.122 0 0 0-2.12 2.12V18.5h8.479v-1.349a2.121 2.121 0 0 0-2.12-2.12h-4.239Zm3.182-1.5c.284-.272.48-.751.48-1.583 0-1.708-.825-1.927-1.542-1.927-.718 0-1.542.219-1.542 1.927 0 .832.196 1.31.48 1.583.298.286.694.344 1.062.344.368 0 .764-.058 1.062-.344Z"
                    fill="currentColor"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                </svg>
              </figure>
              Advanced Collaboration Tools
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
