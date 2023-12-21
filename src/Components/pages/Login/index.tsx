import { Link } from 'react-router-dom';
import { Input } from '../../shared/Input';
import { Social } from '../../shared/SocialLogin';
import { useAuthRedir } from '../../hooks/useAuthRedir';

export const Login = () => {
  useAuthRedir();
  return (
    <main className="px-0 md:px-8 py-6">
      <div className="max-w-md mx-auto rounded-lg px-8 py-6">
        <h1 className="font-semibold mt-4 font-grotesk text-md mb-10">Login to continue</h1>
        <Social></Social>
        <form className="mt-6">
          <ul className="grid gap-2">
            <li>
              <Input name="email" type="email" placeholder="Email"></Input>
            </li>
            <li>
              <Input name="password" type="password" placeholder="Password"></Input>
            </li>
            <li>
              <a href="#" className="text-xs border-b border-black border-dashed transition-colors active:bg-black/15">
                Forget Password?
              </a>
            </li>
            <li>
              <button className="py-2 mt-4 rounded bg-blue-main text-white font-grotesk font-semibold w-full transition-transform active:scale-y-95">Login</button>
            </li>
          </ul>
        </form>
        <h4 className="mt-6 text-sm">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-medium border-b border-black border-dashed transition-colors hover:bg-black/15">
            Register
          </Link>
        </h4>
      </div>
    </main>
  );
};
