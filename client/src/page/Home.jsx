import { useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchFiler, searchStart, searchSuccess } from '../Redux/jobSlice';
function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      dispatch(searchStart());
      const res = await axios.post(
        'https://tre-gre.vercel.app/api/jobs/search',
        {
          title: search,
        }
      );
      console.log(res);
      dispatch(searchSuccess(res.data));
      navigate('/job');
    } catch (error) {
      console.log(error);
      dispatch(searchFiler());
    }
  };
  return (
    <Layout>
      <div className=" ">
        <div className="flex flex-col  max-w-[1240px] items-center justify-between w-full  m-auto ">
          <div className="flex flex-col items-center my-4">
            <h1 className="py-3 text-3xl font-extrabold md:py-6 md:text-5xl lg:text-7xl">
              Let’s Find Job For you
            </h1>
            <h2 className="text-base lg:text-xl ">
              Any Industry, Any Location ,Any experience level
            </h2>
          </div>
          <div className="items-center justify-center w-full m-auto lg:my-20 md:flex ">
            <div className="m-4 border">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="w-full  rounded-lg  bg-gray-200 p-3 border "
                placeholder="Job title or keyword"
              />
            </div>
            <div className="m-4">
              <input
                className="w-full rounded-lg  bg-gray-200 p-3 border"
                placeholder="Put location"
              />
            </div>

            <div className="m-4 ">
              <button
                onClick={handleSearch}
                className="w-full py-2 text-xl font-semibold text-white bg-green-400 border rounded-md md:rounded-full px-7"
              >
                Find Jobs
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-left md:text-2xl">
              Most Searches
            </h1>
            <div></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-3 md:grid-cols-4 lg:grid-cols-5 md:7 lg:my-12">
          <div className="bg-gray-200 border rounded-full">
            <button className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </button>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-sm font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
          <div className="bg-gray-200 border rounded-full">
            <p className="p-1 text-xs font-semibold text-center  md:text-base md:p-2">
              work from Home
            </p>
          </div>
        </div>
        <div className="flex my-5 flex-col  max-w-[1240px] items-center justify-between w-full  m-auto ">
          <h2 className="text-gray-600">Job is available only Ethiop</h2>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
