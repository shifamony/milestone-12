import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Main from "../layout/Main";
import About from "../Pages/About";
import Appointment from "../Pages/Appointment/Appointment";
import Contact from "../Pages/Contact";
import PrivateRoutes from '../Routes/PrivateRoutes'
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Reviews from "../Pages/Reviews";
import Signup from "../Pages/Signup";

 const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        
        {
            path: '/about',
            element: <About></About>
        },
        {
          path: '/appointment',
          element: <Appointment></Appointment>
        },
        {
            path: '/reviews',
            element: <Reviews></Reviews>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
          }
    ]
     

   },

   {
    path:'/dashboard',
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,

    children: [
      {
        path:  '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]


   }

]);
export default router;