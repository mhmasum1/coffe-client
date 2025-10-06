import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : ''}>Home</NavLink></li>
            <li><NavLink to="/addcoffee" className={({ isActive }) => isActive ? 'font-bold' : ''}>Add Coffee</NavLink></li>
            <li><NavLink to="/users" className={({ isActive }) => isActive ? 'font-bold' : ''}>Users</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-700">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold">
                    <span className="text-2xl">☕</span>
                    Coffee Store
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to="/signin">
                    <button className="btn btn-sm btn-ghost">Sign In</button>
                </Link>
                <Link to="/signup">
                    <button className="btn btn-sm bg-white text-amber-700 hover:bg-gray-100 border-none">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;