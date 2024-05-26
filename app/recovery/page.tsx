"use client";
import { useFormState } from "react-dom";
import { recoveryUserAction } from "../auth/recovery/action";
import { ZodErrors } from "@/components/zodError/zodError";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};
const Recovery = () => {

  const [formState, formAction] = useFormState(recoveryUserAction,INITIAL_STATE);
  console.log(formState,"Recovery-client")
  return (
    <>
      <div className="max-w-lg container mx-auto mt-5 px-5">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-white">
              Password Recovery
            </h2>

            <p className="mt-4 text-center text-gray-400">
              Please enter your email
            </p>

            <form action={formAction} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm">
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
        </div>
      </div>
    </>
  );
};

export default Recovery;
