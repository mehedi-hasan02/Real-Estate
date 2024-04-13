import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../Firebase/firebase.config";


const Navbar = () => {

    const { users , logOut} = useContext(AuthContext)

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
    </>

    const handelSingOut = () =>{
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
                <a className="btn btn-ghost text-xl">Dream House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ?
                        <div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <Link onClick={handelSingOut} className="btn" to='/'>Sign Out</Link>
                        </div>
                        :
                        <Link className="btn" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;