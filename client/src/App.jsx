import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import axios from 'axios';
import Jop from './page/Jop';
import JobDetails from './page/JobDetails';
import Profile from './page/Profile';
import SaveJob from './page/SaveJob';
import ProfileEdit from './page/ProfileEdit';
import PostJob from './page/PostJob';

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="job" element={<Jop />} />
          <Route path="savejobs" element={<SaveJob />} />
          <Route path="edit" element={<ProfileEdit />} />
          <Route path="job/:id" element={<JobDetails />} />
          <Route path="postJob" element={<PostJob />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
