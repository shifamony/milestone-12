import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About";
import Appointment from "../Pages/Appointment/Appointment";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Reviews from "../Pages/Reviews";

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
            path: '/contact',
            element: <Contact></Contact>
          }
    ]
     

   },

]);
export default router;