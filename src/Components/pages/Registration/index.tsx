import { Link, useLocation, useNavigate } from 'react-router-dom';
import Input from '../../shared/Input';
import { Social } from '../../shared/SocialLogin';
import { useAuthRedir } from '../../hooks/useAuthRedir';
import { useContext, useRef, useState } from 'react';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';
import { Toast } from '../../shared/Toast';
import { TogglePassword } from '../../shared/TogglePassword';
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
  email: string;
  password: string;
};
export const Registration = () => {
  useAuthRedir();
  const [isUpdating, setIsUpdating] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext) as AuthContextProps;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = data => {
    if (isUpdating) return;
    setIsUpdating(true);

    const { email, password } = data;

    console.log(data);

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Toast('Enter a valid email');
      setIsUpdating(false);
      return;
    }

    if (email && password) {
      createUser(email, password)
        .then(() => {
          Toast('User created successfully.');
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
        <h1 className="font-semibold mt-4 font-grotesk text-md mb-10">Create an account</h1>
        <Social></Social>
        <form ref={formRef} onSubmit={handleSubmit(handleFormSubmit)} className="mt-6">
          <ul className="grid gap-2">
            <li>
              <Input
                type="email"
                placeholder="Email"
                {...register('email', { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                required
                style={{ borderColor: errors.email ? 'red' : '' }}
              ></Input>
            </li>
            <li>{errors.email && <h4 className="text-xs text-red-600 font-medium">Enter a valid email.</h4>}</li>
            <li className="relative flex items-center">
              <Input
                className="pr-12"
                {...register('password', { pattern: /^(?=.*[A-Z]).{8,}$/i })}
                type={viewPass ? 'text' : 'password'}
                placeholder="Password"
                required
                style={{ borderColor: errors.password ? 'red' : '' }}
              ></Input>
              <TogglePassword setViewPass={setViewPass} viewPass={viewPass}></TogglePassword>
            </li>
            <li>
              {errors.password && (
                <h4 className="text-xs text-red-600 font-medium">
                  The password <strong>should be at least 6 characters</strong> and must contain <strong>a capital letter</strong> and <strong>a special character</strong>.
                </h4>
              )}
            </li>
            <li>
              <button className="py-2 mt-4 rounded bg-blue-main text-white font-grotesk font-semibold w-full transition-transform active:scale-y-95">Register</button>
            </li>
          </ul>
        </form>
        <h4 className="mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="font-medium border-b border-black border-dashed transition-colors hover:bg-black/15">
            Login
          </Link>
        </h4>
      </div>
    </main>
  );
};
