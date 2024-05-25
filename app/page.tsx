"use client";
import Link from "next/link";
import { useFormState } from "react-dom";

import { Userschema } from "./action";
import { useFormik } from "formik";

const InputValues = {
  name: '',
  email: '',
  password: ''
}

export default function Home() {

 const {values, handleBlur , handleChange , handleSubmit, errors} = useFormik({
    initialValues: InputValues,
    validationSchema: Userschema ,
    onSubmit: (values) =>{
      console.log(values)
    }
  })

  // const [message, formAction] = useFormState(login, null);

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

            <form  onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
                <div>
                  <input
                    placeholder="User Name"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-800 mt-2 font-bold">{errors.name}</p>}
                </div>
                <div className="mt-4">
                  <input
                    placeholder="Email address"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-800 mt-2 font-bold">{errors.email}</p>}
                </div>

                <div className="mt-4">
                  <input
                    placeholder="Password"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="text-red-800 mt-2 font-bold">{errors.password}</p>}
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
                    href="#"
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
    </>
  );
}
