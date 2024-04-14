import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div >
            <div className='max-w-screen-xl mx-auto '>
                <Navbar></Navbar>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;