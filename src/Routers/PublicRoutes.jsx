import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import EstateDetails from "../EstateDetails/EstateDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
                element: <ContactUs/>
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>,
            }
        ]
    }
]);

export default router;