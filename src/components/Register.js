
import Input from './Input'
import {Link,} from "react-router-dom";

function Register() {
  return (
         
      
      <div className='flex justify-center '>


      
<div class="justify-items-center flex-col max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-2 text-xl font-bold text-white sm:text-2xl ">
        Create a new account
    </div>
    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?    
        <button type="button" class="ml-2 py-1 px-4  bg-green-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <Link to="/login"> Sign In</Link>
        </button>
    </span>
    <div class="p-6 mt-8">
        <form action="#">
            
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <Input label="First Name" type="text" placeHolder="First Name" name="firstName"/>
                    </div>
                        <div class=" relative ">
                        <Input label="Last Name" type="text" placeHolder="Last Name" name="LastName"/>
                            
                        </div>
                    </div>
                    <div class="flex flex-col mb-2">
                <div class=" relative ">
                <Input label="Email" type="text" placeHolder="Email" name="email"/>
                    </div>
                </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                            <Input label="Password" type="password" placeHolder="Password" name="password"/>
                            
                            </div>
                        </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Register
                                </button>
                            </div>
                        </form>
    </div>
</div>
</div>
 
  );
}

export default Register;
