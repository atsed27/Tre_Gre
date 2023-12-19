import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiSelfLove } from 'react-icons/gi';

function Jop() {
  const [creatorJob, setCreatorJob] = useState([]);
  const jobs = useSelector((state) => state.job.currentJob);
  console.log(jobs);

  useEffect(() => {
    const getCreator = () => {
      jobs.map(async (job) => {
        const res = await axios.get(
          `http://localhost:4444/api/jobs/creator/${job.userId}`
        );
        setCreatorJob(res.data);
      });
    };
    jobs && getCreator();
  }, [jobs]);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-2">
        <p> {jobs.length} Jobs is found</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="hidden md:flex"></div>
        <div className=" md:col-span-2">
          <div className="px-3 py-2 my-1 bg-red-100 border rounded-lg md:my-2">
            <p className="text-xl font-bold md:text-center">
              Average Base Salary
            </p>
          </div>

          {jobs.map((job) => (
            <Link to={`/job/${job._id}`} key={job._id}>
              <div
                className="w-full mb-2 border-2 rounded-md shadow-md"
                key={job._id}
              >
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between w-full pb-2">
                    <h1 className="w-4/5 text-xl font-bold md:text-3xl">
                      {job.title}
                    </h1>
                    <div>
                      <GiSelfLove size={40} />
                    </div>
                  </div>
                  <div className="flex items-center pb-2">
                    <p>easy apply</p>
                    <p className="">.</p>
                    <p>Posted 12 day ago</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p>Mela mela</p>
                      <p className="hidden md:flex">
                        $40000 to $45000 per annual
                      </p>
                      <p className="flex md:hidden">$40000 to 45000 pa</p>
                      <p>
                        {job.type} , {job.workTime}
                      </p>
                      <p>{creatorJob.fullName}</p>
                    </div>
                    <div className="flex justify-end ">
                      <img
                        className="w-1/2"
                        alt="sra"
                        src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="justify-center hidden md:flex ">
          Ethiop freelanc wooo
        </div>
      </div>
    </Layout>
  );
}

export default Jop;
