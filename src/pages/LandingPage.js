import { Fragment } from 'react'
import Logo from './../images/logo-color.png'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";

function LandingPage() {
    return (
        <div className="Home">
            <img className="mx-auto pt-8 pb-0  h-30 w-36" src={Logo}></img>
            <div className="bg-gray-700 dark:bg-gray-800 flex justify-center">

                <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto pt-4 pb-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block text-white">
                            BookShelf
                        </span>
                        <span className="block text-indigo-500">
                            Your Personal Library and social network for bookworms
                        </span>
                    </h2>
                    <br></br>
                    <div className="lg:mt-0 w-full">
                        <div className=" inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <Link to="/register">Register</Link>
                            </button>
                        </div>
                        <div className="inline-flex ml-3 rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <Link to="/login">Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LandingPage;
