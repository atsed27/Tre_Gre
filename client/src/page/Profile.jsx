import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Profile() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="hidden bg-green-500 md:flex">left</div>
        <div className=" md:col-span-2 ">
          <div className="px-2">
            <div className="mb-3">
              <div className="md:hidden flex justify-end mb-3 mt-2">
                setting
              </div>
              <h1 className="text-center text-4xl font-bold">
                Daniel's dashboard
              </h1>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h1>Profile & CV visibility</h1>
              <button>show</button>
            </div>
            <div className="border-2 mb-3 rounded-xl flex py-4 px-3 justify-between  ">
              <div className="flex">
                <h1>icon</h1>
                <div className="ml-3">
                  <h1>Profile</h1>
                  <h3>Daniel Nigatu</h3>
                </div>
              </div>
              <div>
                <button className="text-blue-500">
                  <Link to="/edit">Edit</Link>
                </button>
              </div>
            </div>
            <div className="border-2 mb-3 rounded-xl flex py-4 px-3 justify-between  ">
              <div className="flex">
                <h1>icon</h1>
                <div className="ml-3">
                  <h1>CV</h1>
                  <h3>Daniel Nigatu.pdf</h3>
                </div>
              </div>
            </div>
            <div className=" flex mb-3">
              <div className="bg-gray-200 w-1/2 rounded-md mr-5">
                <div className="px-3 py-2">
                  <Link to={'/savejobs'}>
                    <div className=" flex justify-end">Icons</div>
                    <div className="">
                      <h1 className="text-xl font-bold pb-1">1</h1>
                      <h3>Saved jobs</h3>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md w-1/2 ">
                <div className="px-3 py-2">
                  <Link to={'/'}>
                    <div className=" flex justify-end">Icons</div>
                    <div className="">
                      <h1 className="text-xl font-bold pb-1">11</h1>
                      <h3>Applications</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-gray-200 w-full rounded-md mr-5">
                <div className="px-3 py-2">
                  <Link to={'/'}>
                    <div className=" flex justify-end">Icons</div>
                    <div className="">
                      <h1 className="text-xl font-bold pb-1">0</h1>
                      <h3>Job Alerts</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500  hidden md:flex ">Ethiop freelanc wooo</div>
      </div>
    </Layout>
  );
}

export default Profile;
