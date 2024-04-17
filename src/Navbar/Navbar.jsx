import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../Firebase/firebase.config";

const Navbar = () => {

    const { users, logOut } = useContext(AuthContext)

    const navLink = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Home</NavLink></li>
        <li><NavLink to='/profile' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Profile</NavLink></li>
        <li><NavLink to='/updateProfile' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Update Profile</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Contact</NavLink></li>
        <li><NavLink to='/ourTeams' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn bg-white shadow-none border-none'}>Our Teams</NavLink></li>
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


<Link to='/' className="btn btn-ghost text-xl lg:text-2xl font-bold -ml-5 md:-ml-0 lg:-ml-0">DreamHouse</Link>

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
                                    <img className="hidden md:flex lg:flex" alt="User Avatar" src={users.photoURL} title={users.displayName} />
                                </div>
                            </div>
                            <Link onClick={handelSingOut} className="btn bg-green-500 text-white hover:bg-green-500 text-white">Log Out</Link>
                        </div>
                        :
                        <Link className="btn bg-green-500 text-white hover:bg-green-500 text-white" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;