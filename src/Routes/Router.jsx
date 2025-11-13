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

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/latest-jobs')
      },
      {
        path: "alljobs",
        Component: AllJobs,
        loader: () => fetch('http://localhost:3000/jobs')
      },
      {
        path: "addjob",
        element: <AddJob></AddJob>
      },
      {
        path: "myacceptedtasks",
        element: <MyAcceptedTasks></MyAcceptedTasks>,
        loader: () => fetch('http://localhost:3000/jobs')
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
        loader: () => fetch('http://localhost:3000/jobs')
      },
      {
        path: "jobDetails/:id",
        element: <JobsDetails></JobsDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
    ]
  },
  {
        path: '*',
        Component: NotFound
    }
]);

export default router;
