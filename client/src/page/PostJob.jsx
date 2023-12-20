/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PayPanel from '../components/PayPanel';

function PostJob() {
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [role, setRole] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async () => {
    const res = await axios.post(
      'https://tre-gre-az7p.onrender.com/api/jobs/create',
      {
        title,
        salary,
        workTime,
        desc,
        type,
        workPlace,
        role,
      }
    );
    console.log(res);
  };
  return (
    <Layout>
      <div>
        <div>
          <h1 className="flex items-center text-lg font-bold ">New Job</h1>
          <div className="my-4">
            <div className="flex items-center justify-center">
              <PayPanel />
            </div>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-wrap ml-3"
            >
              <div className="flex flex-col mt-3 mr-5 w-96">
                <label className="mt-3 mb-2 text-base font-medium text-black/70">
                  Title
                </label>
                <input
                  {...register('title', {
                    required: 'please enter Job title',
                  })}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  placeholder="React js Developer"
                  className="w-4/5 h-3 px-3 py-5 border-2 border-yellow-300 rounded-md"
                />
                {errors.title && (
                  <div className="text-red-600"> {errors.title.message} </div>
                )}
              </div>
              <div className="flex flex-col mt-3 mb-2 mr-5 w-96">
                <label className="mt-3 mb-2 text-base font-medium text-black/70">
                  salary
                </label>
                <input
                  {...register('salary', {
                    required: 'please enter Salary',
                  })}
                  onChange={(e) => setSalary(e.target.value)}
                  type="text"
                  placeholder="20-30 K"
                  className="w-4/5 h-3 px-3 py-5 border border-yellow-300 rounded-md"
                />
                {errors.salary && (
                  <div className="text-red-600"> {errors.salary.message} </div>
                )}
              </div>
              <div className="flex flex-col mt-3 mb-2 mr-5 w-96">
                <label className="mt-3 mb-2 text-base font-medium text-black/70">
                  workTime
                </label>
                <input
                  {...register('workTime', {
                    required: 'please enter work time',
                  })}
                  onChange={(e) => setWorkTime(e.target.value)}
                  type="text"
                  placeholder="Full-time"
                  className="w-4/5 h-3 px-3 py-5 border border-yellow-300 rounded-md"
                />
                {errors.workTime && (
                  <div className="text-red-600">{errors.workTime.message} </div>
                )}
              </div>

              <div className="flex flex-col mt-3 mb-2 mr-5 w-96">
                <label className="mt-3 mb-2 text-base font-medium text-black/70">
                  workPlace
                </label>
                <input
                  {...register('workPlace', {
                    required: 'please enter work place',
                  })}
                  onChange={(e) => setWorkPlace(e.target.value)}
                  type="text"
                  placeholder="Gondor"
                  className="w-4/5 h-3 px-3 py-5 border border-yellow-300 rounded-md"
                />
                {errors.workPlace && (
                  <div className="text-red-600">{errors.workPlace.message}</div>
                )}
              </div>
              <div className="flex flex-col mt-3 mb-2 mr-5 w-96">
                <label className="mt-3 mb-2 text-base font-medium text-black/70">
                  Description
                </label>
                <textarea
                  {...register('dsc', {
                    required: 'please enter Job Description',
                  })}
                  onChange={(e) => setDesc(e.target.value)}
                  maxLength={500}
                  className="w-4/5 h-3 px-3 py-5 border border-yellow-300 rounded-md"
                />
                {errors.dsc && (
                  <div className="text-red-600">{errors.dsc.message}</div>
                )}
              </div>
              <div className="flex flex-col mt-3 mb-2 mr-5 w-96">
                <label className="mt-3 mb-2 text-base font-medium text-black/70">
                  Role
                </label>
                <textarea
                  maxLength={500}
                  className="w-4/5 h-3 px-3 py-5 border border-yellow-300 rounded-md"
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="flex flex-col mt-3 mr-5 w-96 ">
                <label className="mt-3 text-base font-medium text-gray-300">
                  Job Type
                </label>
                <div className="">
                  <input
                    {...register('Type', {
                      required: 'please enter Job type',
                    })}
                    className="mt-4"
                    type="radio"
                    name="Type"
                    id="Permanent"
                    value={'Permanent'}
                    onChange={(e) => setType(e.target.value)}
                  />

                  <label className="m-3 text-md" fro="Permanent">
                    Permanent
                  </label>
                  <input
                    {...register('Type', {
                      required: 'please enter Job type',
                    })}
                    className="mt-4"
                    type="radio"
                    name="Type"
                    id="Contract"
                    value={'Contract'}
                    onChange={(e) => setType(e.target.value)}
                  />

                  <label className="m-3 text-md" fro="Contract">
                    Contract
                  </label>
                  {errors.Type && (
                    <div className="text-red-600">{errors.Type.message}</div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button className="px-20 py-2 text-white bg-blue-800 rounded-md">
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PostJob;
