import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Booking from "../components/Booking/Booking";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Main from "../Layouts/Main";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://travel-guru-server-gilt.vercel.app/locations'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('https://travel-guru-server-gilt.vercel.app/locations'),
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
            },
            {
                path: '/booking/:id',
                loader: ({ params }) => fetch(`https://travel-guru-server-gilt.vercel.app/locations/${params.id}`),
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
            },
            {
                path: '/details',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>
            },
            {
                path: '/details/:id',
                loader: async ({ params }) => { return fetch(`https://travel-guru-server-gilt.vercel.app/hotels/${params.id}`) },
                element: <PrivateRoutes><Details></Details></PrivateRoutes>
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