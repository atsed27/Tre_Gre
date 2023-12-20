import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFiler, loginStart, loginSuccess } from '../Redux/userSlice';
function Login() {
  const navigation = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submitHandler = async ({ email, password }) => {
    try {
      dispatch(loginStart());
      const res = await axios.post(
        'https://tre-gre-az7p.onrender.com/api/auth/signin',
        {
          email,
          password,
        }
      );
      dispatch(loginSuccess(res.data));
      navigation('/');
    } catch (error) {
      console.log(error);
      dispatch(loginFiler());
    }
  };
  return (
    <div className="flex items-center justify-center h-screen m-auto bg-gradient-to-b from-lime-200 to-lime-600 ">
      <div className="w-4/5 px-3 py-2 md:w-auto">
        <h1 className="mb-2 text-lg font-bold md:mb-2 md:text-2xl ">
          WelCome Back
          <span className="text-xl font-extrabold text-green-700 md:text:5xl">
            .
          </span>
        </h1>

        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
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

          <div className="">
            <button className="bg-yellow-400">Login</button>
          </div>
          <div className="">
            Do not have an account? &nbsp;
            <Link className="text-blue-600" to={'/signup'}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
