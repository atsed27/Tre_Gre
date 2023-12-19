import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  console.log(location);
  const submitHandler = async ({ fullName, email, password }) => {
    try {
      const res = await axios.post(
        'https://tre-gre-az7p.onrender.com/api/auth/signup',
        {
          fullName,
          email,
          password,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen m-auto bg-gradient-to-b from-lime-200 to-lime-600 ">
      <div className="w-4/5 px-3 py-2 md:w-auto">
        <h1 className="mb-2 text-base font-bold md:mb-2 md:text-2xl ">
          Create New Account
          <span className="text-xl font-extrabold text-green-700 md:text:5xl">
            {' '}
            .
          </span>
        </h1>

        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col mb-4">
            <input
              className="w-full px-1 py-1 border rounded-lg md:px-3 "
              autoFocus
              id="fullName"
              type="text"
              placeholder="fullName"
              {...register('fullName', {
                required: 'please enter your name',
              })}
            />
            {errors.fullName && (
              <div className="text-red-600"> {errors.fullName.message} </div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <input
              {...register('email', {
                required: 'please enter your email address',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email address',
                },
              })}
              className="w-full px-1 py-1 border rounded-lg md:px-3 "
              autoFocus
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <div className="text-red-600"> {errors.email.message} </div>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <input
              className="w-full px-1 py-1 border rounded-lg md:px-3 "
              autoFocus
              id="password"
              type="password"
              placeholder="password"
              {...register('password', {
                required: 'Please enter your password',
                minLength: { value: 3, message: 'password more than 3 chars' },
              })}
            />
            {errors.password && (
              <div className="text-red-600">{errors.password.message}</div>
            )}
          </div>
          <div className="flex mb-4">
            <input
              className="w-full px-1 py-1 border rounded-lg md:px-3 "
              autoFocus
              id="cPassword"
              type="password"
              placeholder=" conform password"
            />
          </div>
          <div className="">
            <button className="bg-yellow-400">Login</button>
          </div>
          <div className="">
            Do have an account? &nbsp;
            <Link className="text-blue-600" to={'/signin'}>
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
