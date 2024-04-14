import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div >
            <div className='max-w-screen-xl mx-auto '>
                <Navbar></Navbar>
                <Outlet />
            </div>
            <Footer />
            <Toaster/>
        </div>
    );
};

export default MainLayout;