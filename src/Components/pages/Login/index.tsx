import { Link, useLocation, useNavigate } from 'react-router-dom';
import Input from '../../shared/Input';
import { Social } from '../../shared/SocialLogin';
import { useAuthRedir } from '../../hooks/useAuthRedir';
import { FormEvent, useContext, useRef, useState } from 'react';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';
import { Toast } from '../../shared/Toast';
import { TogglePassword } from '../../shared/TogglePassword';

export const Login = () => {
  useAuthRedir();
  const [isUpdating, setIsUpdating] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { resetPassword, signIn } = useContext(AuthContext) as AuthContextProps;

  const handleResetPassword: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();

    if (formRef.current) {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formRef.current.email.value)) Toast('Enter an email to the field to reset the password.');
      else
        resetPassword(formRef.current.email.value)
          .then(() => Toast('Check your email to reset your Password.'))
          .catch(err => (err.code === 'auth/too-many-requests' ? Toast('Try verifying after a little while.') : Toast('Something went wrong.')));
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUpdating) return;
    setIsUpdating(true);

    const form = e.target as HTMLFormElement;
    const email = form.email?.value;
    const password = form.password?.value;

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Toast('Enter a valid email');
      setIsUpdating(false);
      return;
    }

    if (email && password) {
      signIn(email, password)
        .then(() => {
          Toast('Signed in successfully.');
          setIsUpdating(false);
          navigate(location?.state ? location.state : '/');
        })
        .catch(err => {
          setIsUpdating(false);

          if (err.code === 'auth/user-not-found') Toast('The user not found.');
          if (err.code === 'auth/invalid-login-credentials' || err.code === 'auth/invalid-credential') Toast('Your password or email might be wrong.');
          else Toast('An error occurred. Please try again later.', { isError: true });
        });
    }
  };
  return (
    <main className="px-0 md:px-8 py-6">
      <div className="max-w-md mx-auto rounded-lg px-8 py-6">
        <h1 className="font-semibold mt-4 font-grotesk text-md mb-10">Login to continue</h1>
        <Social></Social>
        <form ref={formRef} onSubmit={handleFormSubmit} className="mt-6">
          <ul className="grid gap-2">
            <li>
              <Input name="email" type="email" placeholder="Email" required></Input>
            </li>
            <li className="relative flex items-center">
              <Input className="pr-12" name="password" type={viewPass ? 'text' : 'password'} placeholder="Password" required></Input>
              <TogglePassword setViewPass={setViewPass} viewPass={viewPass}></TogglePassword>
            </li>
            <li>
              <a onClick={handleResetPassword} href="#" className="text-xs border-b border-black border-dashed transition-colors active:bg-black/15">
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
