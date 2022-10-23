import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Booking from "../components/Booking/Booking";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Main from "../Layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                loader: () => fetch('https://travel-guru-server-gilt.vercel.app/locations'),
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/booking/:id',
                loader: ({ params }) => fetch(`https://travel-guru-server-gilt.vercel.app/locations/${params.id}`),
                element: <Booking></Booking>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }

])