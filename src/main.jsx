import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from './Layouts/RootLayouts.jsx';
import Home from './Pages/Home/Home.jsx';
import AllJobs from './Pages/AllJobs/AllJobs.jsx';
import AddJob from './Pages/AddJob/AddJob.jsx';
import MyAcceptedTasks from './Pages/MyAcceptedTasks/MyAcceptedTasks.jsx';
import AuthProvider from './Contexts/AuthProvider/AuthProvider.jsx';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import JobsDetails from './Pages/JobsDetails/JobsDetails';
import MyAddedJobs from './Pages/MyAddedJobs/MyAddedJobs.jsx';

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
        element: <MyAcceptedTasks></MyAcceptedTasks>
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
        Component: MyAddedJobs,
        loader: () => fetch('http://localhost:3000/jobs')
      },
      {
        path: "jobDetails/:id",
        Component: JobsDetails,
        loader: () => fetch('http://localhost:3000/jobs')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
