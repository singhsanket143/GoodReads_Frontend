
import Input from '../components/Input'
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from 'axios'
import AuthContext from '../helpers/authContext';
import Cookies from 'universal-cookie'



const cookies = new Cookies();
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessageEmail, setvalidationMessageEmail] = useState('');
    const [validationMessagePass, setvalidationMessagePass] = useState('');
    const [loginError, setLoginError] = useState('');
    const [formError, setformError] = useState(false);


    const { isAuthenticated, login, logout } = useContext(AuthContext);


    const navigate = useNavigate();

    const validateEmail = function () {

        var emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        if (!emailRegex.test(email) || email === '') {
            setformError(true)
            setvalidationMessageEmail('Email should be something@something.com');

        }
        else {
            setformError(false);
            setvalidationMessageEmail('');
        }
        console.log(email)

    }

    const validatePassword = function () {
        var passRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')
        if (!passRegex.test(password) || password === '') {
            setvalidationMessagePass('Password should be 8 letters');
            console.log("Password should be 8 letters")
            setformError(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        console.log('form submitted');
        //make a call to backend
        if (!formError) {
            console.log(formError)
            signIn();
        }

    }
    const signIn = async () => {
        var data = {
            "email": email,
            "password": password
        };
        console.log(data);
        var signInUrl = 'http://localhost:3005/api/v1/signin';

        try {
            const responseData = await axios.post(signInUrl, data);
            console.log(responseData.data.data);
            //set the token in cookie
            const token = responseData.data.data.token;
            const loggedUsername = responseData.data.data.username;
            cookies.set("jwtToken", token, '/');
            cookies.set("email", email, '/');
            cookies.set("loggedUsername", loggedUsername, '/');
            console.log(isAuthenticated);
            login();

            navigate("/home")

        } catch (error) {

            console.log(error);
            setLoginError(error.response.data.err)
        }


    }

    return (
        <div className='flex justify-center '>
            <div className="justify-items-center flex-col max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-bold text-white sm:text-2xl ">
                    Login To Your Account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Dont have an account ?  <button type="button" className="ml-2 py-1 px-4 bg-green-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                        <Link to="/register"> Register</Link>
                    </button>
                </span>
                <p className='bg-red-300 mt-3 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-red-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>{validationMessageEmail}</p>
                <p className='bg-red-300 mt-3 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-red-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>{validationMessagePass}</p>
                <p className='bg-green-400 mt-3 hover:bg-green-200 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>{loginError}</p>
                <div className="p-6 mt-8">
                    <form action="#">

                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input onBlur={function (e) { validateEmail(); setEmail(e.target.value) }}
                                    label="Email" type="text" placeholder="Email" name="email"
                                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input onBlur={function (e) { setLoginError(''); setPassword(e.target.value) }}
                                    label="Password" type="password" placeholder="Password" name="password"
                                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

                            </div>
                        </div>
                        <div className="flex w-full my-4">
                            <button onClick={handleSubmit} type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;
