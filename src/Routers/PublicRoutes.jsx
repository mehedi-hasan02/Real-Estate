import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import EstateDetails from "../EstateDetails/EstateDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurTeams from "../Pages/OurTeams/OurTeams";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/fakeData.json'),
            },
            {
              path: '/estateDetails/:id',
              element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
              loader:()=>fetch('/fakeData.json'),
            },
            {
                path:'/contact',
                element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
            },
            {
                path:'/ourTeams',
                element: <OurTeams/>,
            },
            {
                path: '/updateProfile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>,
            },
        ]
    }
]);

export default router;