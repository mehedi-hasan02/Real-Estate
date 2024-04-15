import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../Firebase/firebase.config";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {

    const { users, logOut } = useContext(AuthContext)

    const navLink = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Home</NavLink></li>
        <li><NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Update Profile</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Contact</NavLink></li>
        <li><NavLink to='/ourTeams' className={({ isActive }) => isActive ? 'text-green-400 border border-green-400 btn hover:bg-white shadow-none hover:border-green-400' : 'btn bg-white shadow-none border-none'}>Our Teams</NavLink></li>
        
    </>

    const handelSingOut = () => {
        logOut(auth)
            .then()
            .catch()           
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1]  rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">DreamHouse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    users ?
                        <div className="flex gap-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">                                   
                                <img className="hidden md:flex lg:flex" alt="User Avatar" src={users.photoURL}/>
                                </div>
                            </div>
                            <Link onClick={handelSingOut} className="btn">Sign Out</Link>
                        </div>
                        :
                        <Link className="btn" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;