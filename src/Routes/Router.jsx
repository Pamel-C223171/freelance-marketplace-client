// import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from '../Layouts/RootLayouts.jsx';
import Home from '../Pages/Home/Home.jsx';
import AllJobs from '../Pages//AllJobs/AllJobs.jsx';
import AddJob from '../Pages/AddJob/AddJob.jsx';
import MyAcceptedTasks from '../Pages/MyAcceptedTasks/MyAcceptedTasks.jsx';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider.jsx';
import Register from '../Pages/Register/Register.jsx';
import Login from '../Pages/Login/Login.jsx';
import JobsDetails from '../Pages/JobsDetails/JobsDetails.jsx';
import MyAddedJobs from '../Pages/MyAddedJobs/MyAddedJobs.jsx';
import NotFound from '../Pages/NotFound/NotFound.jsx';
import PrivateRoutes from '../Contexts/AuthProvider/PrivateRoutes.jsx';
import  axios  from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await axios.get('http://localhost:3000/latest-jobs');
          return res.data;
        }
      },
      {
        path: "alljobs",
        Component: AllJobs,
        loader: async () => {
          const res = await axios.get('http://localhost:3000/jobs');
          return res.data;
        }
      },
      {
        path: "addjob",
        element: <AddJob></AddJob>
      },
      {
        path: "myacceptedtasks",
        element: <MyAcceptedTasks></MyAcceptedTasks>,
        loader: async () => {
          const res = await axios.get('http://localhost:3000/jobs');
          return res.data;
        }
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "myaddedjobs",
        element: <MyAddedJobs></MyAddedJobs>,
         loader: async () => {
          const res = await axios.get('http://localhost:3000/jobs');
          return res.data;
        }
      },
      {
        path: "jobDetails/:id",
        element: <JobsDetails></JobsDetails>,
         loader: async ({params}) => {
          const res = await axios.get(`http://localhost:3000/jobs/${params.id}`);
          return res.data;
        }
      },
    ]
  },
  {
        path: '*',
        Component: NotFound
    }
]);

export default router;
