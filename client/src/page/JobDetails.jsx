import Layout from '../components/Layout';
import locationImg from '../assets/img/location.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GiSelfLove } from 'react-icons/gi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { BiHide } from 'react-icons/bi';

function JobDetails() {
  const [Job, setJob] = useState({});
  const [creatorJob, setCreatorJob] = useState([]);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const jobs = async () => {
      try {
        const res = await axios.get(
          `https://tre-gre-az7p.onrender.com/api/jobs/${id}`
        );

        setJob(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    jobs();
  }, [id]);
  useEffect(() => {
    const getCreator = async () => {
      const res = await axios.get(
        `https://tre-gre-az7p.onrender.com/api/jobs/creator/${Job.userId}`
      );

      setCreatorJob(res.data);
    };

    Job.userId && getCreator();
  }, [Job.userId]);
  return (
    <Layout title={Job.title}>
      <div>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="hidden md:flex"></div>
          <div className="col-span-2 ">
            <div className="">
              <div className="border rounded-lg shadow-md">
                <div className="flex px-3 py-2 lg:py-4">
                  <div className="w-1/3">
                    <img
                      className="w-1/2"
                      alt="sra"
                      src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    />
                  </div>
                  <div className="w-2/3">
                    <h1 className="text-lg font-bold md:xl lg:2xl:">
                      {Job.title}
                    </h1>
                    <h2>{creatorJob.fullName} </h2>
                  </div>
                </div>
                <hr className="h-[1px] bg-red-100 border-none" />
                <div className="px-5 py-2 lg:py-4">
                  <p className="py-1">Salary</p>
                  <p className="py-1 ">$50000 t0 $60000 per annual</p>
                  <p className="py-1">
                    {Job.type}, {Job.workTime}{' '}
                    <span className="text-xl font-bold">.</span> {Job.workPlace}
                  </p>
                  <p className="py-1">Posted 13 day ago</p>
                </div>
                <hr className="h-[1px] bg-red-100 border-none" />
                <div className="px-3 py-2">
                  <h3 className="py-1 text-lg font-medium"> {Job.title}</h3>
                  <h4 className="py-1 text-base">
                    $50000 t0 $60000 per annual
                  </h4>
                  <div className="py-8">
                    <div>
                      <p>{Job.desc}</p>
                    </div>
                    <div>
                      <p>Roles</p>
                    </div>
                    <div>
                      <p>Required </p>
                    </div>
                  </div>
                </div>
                <hr className="h-[1px] bg-red-100 border-none" />
                <div className="px-3 py-2">
                  <h1 className="text-lg font-bold">Required skills</h1>
                  <div className="grid w-full gap-2 py-3 m-auto md:grid-cols-2 ">
                    <div className="mr-2 border">
                      <p className="text-center text-blue-500">+ Front End</p>
                    </div>
                    <div className="mr-2 border">
                      <p className="text-center text-blue-500">+ Front End</p>
                    </div>
                    <div className="mr-2 border">
                      <p className="text-center text-blue-500">+ Front End</p>
                    </div>
                    <div className="mr-2 border">
                      <p className="text-center text-blue-500">+ Front End</p>
                    </div>
                  </div>
                </div>
                <hr className="h-[1px] bg-red-100 border-none" />
                <div className="px-3 py-2 lg:py-4">
                  <h1 className="p-2 text-lg font-bold">Location</h1>
                  <div className="py-3">
                    <img src={locationImg} alt="location" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mx-2 my-5 md:my-8items-center md:justify-around">
                <button className="bg-gray-200 rounded-md">
                  <div>
                    <div className="py-4 px-7">
                      <GiSelfLove size={25} />
                    </div>
                    <div className="px-3 py-2">
                      <h3>Save</h3>
                    </div>
                  </div>
                </button>
                <button className="bg-gray-200 rounded-md">
                  <div>
                    <div className="py-4 px-7">
                      <RiSendPlaneLine size={25} />
                    </div>
                    <div className="px-3 py-2">
                      <h3>Share</h3>
                    </div>
                  </div>
                </button>
                <button className="bg-gray-200 rounded-md">
                  <div>
                    <div className="py-4 px-7">
                      <BiHide size={25} />
                    </div>
                    <div className="px-3 py-2">
                      <h3>Hide</h3>
                    </div>
                  </div>
                </button>
              </div>
              <button className="w-full my-3 bg-green-300 hover:font-bold ">
                <p className="p-4 text-center">Apply Job</p>
              </button>
            </div>
          </div>
          <div className="hidden md:flex"></div>
        </div>
      </div>
    </Layout>
  );
}

export default JobDetails;
