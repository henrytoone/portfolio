import React, { useState, useEffect } from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HiOutlineBell, HiBars3, HiXMark } from "react-icons/hi2";
import { NavLink, useNavigate } from 'react-router-dom';

import "./style/Navbar.css";


const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects"},
    { name: "Social Links", href: "/contact" },
];


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="w-full h-1/6 sticky top-0 z-50 bg-zinc-900 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <h2 onClick={() => navigate("/")} className="text-2xl font-bold text-zinc-200 cursor-pointer">Henry Toone</h2>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((link) => {
                                return (
                                    <li className="text-white hover:text-slate-300">
                                        <NavLink to={link.href}>
                                            {link.name}
                                        </NavLink>

                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
