
import Input from '../components/Input'
import {Link,} from "react-router-dom";
import { useState } from 'react';

function Login() {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [validationMessageEmail,setvalidationMessageEmail] = useState('');
    const [formError,setformError] = useState(false)

    const validateEmail = function () {
           
      var emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
      if(!emailRegex.test(email))
      {
         setvalidationMessageEmail('Email should be something@something.com');
         
         setformError(true)
      }
      else{
         setformError(false);
         setvalidationMessageEmail('');
      }
      console.log(email)

    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        validateEmail();
        
        console.log('form submitted');
        //make a call to backend
        if(!formError)
        {
         //LogIn();
        }
        
    }
    const signUp = async() => {
      var data = {
         username: username,
         email: email,
         password: password
     };
     var signUpUrl = 'http://localhost:3005/api/v1/signup'

     fetch(signUpUrl,{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      body:JSON.stringify(data)
     })
    .then(function (response) {
      console.log(response);
      if(!response.ok)
      console.log(JSON.stringify(response));
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.message)
    });
    }

  return (
<div className='flex justify-center '>     
    <div class="justify-items-center flex-col max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-2 text-xl font-bold text-white sm:text-2xl ">
            Login To Your Account
        </div>
        <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Dont have an account ?  <button type="button" class="ml-2 py-1 px-4 bg-green-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                <Link to="/register"> Register</Link>
            </button>
        </span>
        <div class="p-6 mt-8">
            <form action="#">
                
                    <div class="flex flex-col mb-2">
                    <div class=" relative ">
                    <input onChange={function(e){setEmail(e.target.value)}}
                               label="Email" type="text" placeholder="Email" name="email"            
                                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                        </div>
                    </div>
                            <div class="flex flex-col mb-2">
                                <div class=" relative ">
                                <input onChange={function(e){setPassword(e.target.value)}}
                                label="Password" type="password" placeholder="Password" name="password"            
                                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                
                                </div>
                            </div>
                                <div class="flex w-full my-4">
                                    <button onclick={handleSubmit} type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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
