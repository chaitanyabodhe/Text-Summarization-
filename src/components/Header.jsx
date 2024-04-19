import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="  p-8 ">
            <nav className=" bg-[#2a999f] border-gray-200 rounded-md px-6 py-2.5">
                <div className=" pl-4 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    <div className=' text-white text-[18px]  font-semibold font border-b-2'>
                        <Link
                        to=""
      
                        >
                            Text Summarization

                        </Link>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white   font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/Signin"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="Textsum"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-150 ${isActive ? "text-orange-700" : "text-gray-300"}  duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 hover:shadow-lg-white lg:p-0`
                                    }
                                >
                                    Text Summarization
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Para"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-150 ${isActive ? "text-orange-700" : " text-gray-300"}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Paraphrasing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Plag"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-150 ${isActive ? "text-orange-700" : "text-gray-300"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Plagiarism Checker
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Gram"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-150 ${isActive ? "text-orange-700" : "text-gray-300"} hover:rounded-sm border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Grammar Checker
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}