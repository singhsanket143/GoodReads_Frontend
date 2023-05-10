
import { Link } from "react-router-dom";
import AuthContext from '../helpers/authContext';
import {  useContext } from 'react';


function ErrorPage() {
    const { isAuthenticated, logout } = useContext(AuthContext);

    if (isAuthenticated)
    {
        logout();

        console.log("logged out")
    }

    return (
        <div className='flex justify-center '>
            <div className="justify-items-center flex-col max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-bold text-white sm:text-2xl ">
                    404 Page
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Please Login again ?  <button type="button" className="ml-2 py-1 px-4 bg-green-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                        <Link to="/login"> Login</Link>
                    </button>
                </span>


            </div>
        </div>

    );
}

export default ErrorPage;
