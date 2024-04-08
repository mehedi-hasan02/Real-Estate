import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Error/Error";

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