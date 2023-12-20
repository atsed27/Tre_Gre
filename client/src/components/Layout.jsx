import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { logOut } from '../Redux/userSlice';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import pp from '../assets/img/da.jpg';
import { MdArrowBackIos } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
function Layout({ children, title }) {
  const [nav, setNav] = useState(false);
  const [navBg] = useState('#ecf0f3');
  const [linkColor] = useState('#1f2937');

  const navHandle = () => {
    setNav(!nav);
  };
  const location = useLocation();
  const detail = location.pathname.split('/')[2];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header
        style={{ backgroundColor: `${navBg}` }}
        className=" sticky top-0 z-[999] "
      >
        <nav
          className={`flex items-center justify-between ${
            location.pathname === `/job/${detail}` ? `h-10 md:h-16` : `h-16`
          }  px-4 mx-auto shadow-xl `}
        >
          <div className="container hidden mx-auto md:flex">
            <a>
              <h2 className="text-2xl font-extrabold md:mx-4 hover:cursor-pointer ">
                ጥረ_ግረ
              </h2>
            </a>
            <h2 className="hidden mx-4 text-lg md:flex">Job Seekers</h2>
            <h2 className="hidden text-lg md:flex">Businesses</h2>
          </div>
          {location.pathname === '/job' ? (
            <div className="container md:flex w-full mx-auto hidden ">
              <div className="w-4/5">
                <input
                  className="w-full px-3 py-1 rounded-lg md:py-2 bg-white/95 "
                  placeholder="search job"
                />
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="w-full">
            <ul
              style={{ color: `${linkColor}` }}
              className="container items-center hidden mx-auto md:flex justify-end"
            >
              <div className="w-36">
                <button className="ml-10 ">
                  <li className="p-2 px-3 font-bold text-green-500 bg-gray-300 rounded-full hover:border-b">
                    {user.currentUser === null ? (
                      <Link to={'/signin'}>Post a Job</Link>
                    ) : (
                      <Link to={'/postJob'}>Post a Job</Link>
                    )}
                  </li>
                </button>
              </div>
              <div className="w-36   ">
                <div className="ml-10">
                  {user.currentUser ? (
                    <Menu as="div" className="relative inline-block ">
                      <Menu.Button className=" top-3 ">
                        <div className="w-full h-full flex ">
                          <img
                            className=" w-[40px] h-[40px] object-cover   ml-3 rounded-full"
                            src={pp}
                            alt="daniel"
                          />
                        </div>
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                        <Menu.Item>
                          <Link
                            to="/profile"
                            className="flex p-2 hover:bg-gray-200"
                          >
                            profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            className="flex p-2 cursor-pointer hover:bg-gray-200"
                            to="/"
                            onClick={logOutHandler}
                          >
                            Logout
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <div>
                      <Link to={'/signin'}>
                        <li className="px-2 font-semibold ">Sign In</li>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </ul>
            {location.pathname === `/job/${detail}` ? (
              <div className="flex items-center md:hidden ">
                <Link to={'/job'}>
                  <div style={{ color: `${linkColor}` }}>
                    <MdArrowBackIos size={25} />
                  </div>
                </Link>
                <div className="ml-6">
                  <h1 className="text-lg font-bold">{title}</h1>
                </div>
              </div>
            ) : (
              <div className="flex  items-center justify-between w-full ">
                <div
                  style={{ color: `${linkColor}` }}
                  onClick={navHandle}
                  className="md:hidden"
                >
                  <AiOutlineMenu size={25} />
                </div>
                {location.pathname === '/job' ? (
                  <div className="container flex w-full mx-auto md:hidden ml-7 ">
                    <div className="w-4/5">
                      <input
                        className="w-full px-3 py-1 rounded-lg md:py-2 bg-white/95 "
                        placeholder="search job"
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
                <div className="md:hidden">
                  <div className="">
                    {user.currentUser ? (
                      <Menu as="div" className="relative inline-block ">
                        <Menu.Button className=" top-3 ">
                          <div className="w-full h-full flex ">
                            <img
                              className={`${
                                location.pathname === `/job`
                                  ? `w-[60px] h-[38px]`
                                  : `w-[40px] h-[40px]`
                              }  object-cover   ml-2 rounded-full`}
                              src={pp}
                              alt="daniel"
                            />
                          </div>
                        </Menu.Button>
                        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                          <Menu.Item>
                            <Link
                              to="/profile"
                              className="flex p-2 hover:bg-gray-200"
                            >
                              profile
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              className="flex p-2 cursor-pointer hover:bg-gray-200"
                              to="/"
                              onClick={logOutHandler}
                            >
                              Logout
                            </a>
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    ) : (
                      <div>
                        <Link to={'/signin'}>
                          <li className="px-2 list-none font-semibold">
                            Sign In
                          </li>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={
              nav
                ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                : ''
            }
          >
            <div
              className={
                nav
                  ? ' fixed  overflow-y-scroll top-0 left-0 w-[75%] sm:w-[65%] md:w-[45] bg-[#ecf0f3] py-7 px-4  ease-in duration-500 h-screen'
                  : 'fixed left-[-100%] top-0  ease-linear duration-500'
              }
            >
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-xl font-semibold ">
                  ጥረ_ግረ
                </h2>
                <div
                  onClick={navHandle}
                  className="p-3 text-lg rounded-full shadow-lg cursor-pointer shadow-gray-400 "
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-300">
                <p className=" py-3 w-[80%] md:w-[90%]">Let Find your Job</p>
              </div>
              <div className="flex flex-col mt-3 ml-10 ">
                <ul className="">
                  <a href={'/'}>
                    <li className="py-3 text-sm ">Home</li>
                  </a>
                  <a onClick={navHandle} href={'/'}>
                    <li className="py-3 text-sm ">Job Seekers</li>
                  </a>
                  <a onClick={navHandle} href={'/'}>
                    <li className="py-3 text-sm ">Businesses</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container px-4 m-auto mt-4 md:mt-8">{children}</main>
      <footer className="flex items-center justify-center h-10 shadow-inner item-centers">
        <p className="text-sm md:text-base">
          Copyright @ 2016 E.C TRE-GRE By Dani-Lap
        </p>
      </footer>
    </div>
  );
}

export default Layout;
