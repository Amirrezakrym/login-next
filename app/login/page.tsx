"use client"
import Link from "next/link";
import { useFormState } from "react-dom";
import { registerUserAction } from "../auth/register/action";
import { ZodErrors } from "@/components/zodError/zodError";

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
  };

const Register = () => {
    const [formState, formAction] = useFormState(registerUserAction,INITIAL_STATE);

    console.log(formState,"Register-client")

    return ( 
    <>
    <div className="max-w-lg container mx-auto mt-5 px-5">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-white">
              Login
            </h2>

            <p className="mt-4 text-center text-gray-400">
              Sign in to continue
            </p>

            <form action={formAction} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <input
                    placeholder="User Name"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    name="name"
                    id="name"
                  
                  />
                  <ZodErrors error={formState?.zodErrors?.name} />
                 </div>
                <div className="mt-4">
                  <input
                    placeholder="Email address"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="email"
                    name="email"
                    id="email"
                
                  />
                  <ZodErrors error={formState?.zodErrors?.email} />
               </div>

                <div className="mt-4">
                  <input
                    placeholder="Password"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="password"
                    name="password"
                    id="password"
                  
                  />
                  <ZodErrors error={formState?.zodErrors?.password} />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center justify-center">
                  <input
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                  />
                  <label className="ml-2 block text-xs sm:text-sm text-gray-400">
                    Remember me
                  </label>
                </div>

                <div className="text-xs sm:text-sm">
                  <Link
                    href="recovery"
                    className="font-medium text-indigo-500 hover:text-indigo-400"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"              
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Don't have an account?</span>
            <Link
              href="#"
              className="font-medium text-indigo-500 hover:text-indigo-400 ml-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    
    </> );
}
 
export default Register;