"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { FcManager, FcGlobe } from "react-icons/fc";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import {
  BiSearch,
  BiSolidHomeAlt2,
  BiGridAlt,
  BiSolidHeart,
  BiSolidFolder,
  BiSolidVideo,
  BiSolidUserPlus,
  BiSolidChat,
  BiSolidCapsule,
} from "react-icons/bi";

const Dashboard = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row justify-between">
        {/* left side */}
      
          <div className=" hidden md:flex flex-col bg-[#D9FDFD]">
            <div className="p-4 pb-2 flex justify-center items-center">
              <Image
                className=""
                src={"/image/logo.svg"}
                width={100}
                height={100}
                alt="logo"
              ></Image>
            </div>

            <ul className="mt-10 px-4">
              <li
                className={`cursor-pointer rounded-full pr-10 ${
                  pathname === "/dashboard" ? "bg-[#18B9AC]" : ""
                }`}
              >
                <div className="flex items-center  transition-all duration-300 p-2 w-full ">
                  <p className="p-2 bg-white rounded-full">
                    <BiSolidHomeAlt2 className="text-[#18B9AC]" />
                  </p>
                  <p className=" text-black hover:text-white ml-4">Home</p>
                </div>
              </li>

              <li className="cursor-pointer rounded-full pr-10 my-2 hover:bg-[#18B9AC] group transition-all duration-500">
                <div className="flex items-center transition-all duration-300 p-2 w-full ">
                  <p className="p-2 group-hover:bg-white rounded-full">
                    <BiGridAlt className="group-hover:text-[#18B9AC]" />
                  </p>
                  <p className=" text-black group-hover:text-white ml-4">
                    Start
                  </p>
                </div>
              </li>
              <li className="cursor-pointer rounded-full pr-10 my-2 hover:bg-[#18B9AC] group transition-all duration-500">
                <div className="flex items-center   transition-all duration-300 p-2 w-full ">
                  <p className="p-2 group-hover:bg-white rounded-full">
                    <BiSolidHeart className="group-hover:text-[#18B9AC]" />
                  </p>
                  <p className=" text-black group-hover:text-white ml-4">
                    Account
                  </p>
                </div>
              </li>
              <li className="cursor-pointer rounded-full pr-10 my-2 hover:bg-[#18B9AC] group transition-all duration-500">
                <div className="flex items-center   transition-all duration-300 p-2 w-full ">
                  <p className="p-2 group-hover:bg-white rounded-full">
                    <BiSolidFolder className="group-hover:text-[#18B9AC]" />
                  </p>
                  <p className=" text-black group-hover:text-white ml-4">
                    Team
                  </p>
                </div>
              </li>
              <li className="cursor-pointer rounded-full pr-10 my-2 hover:bg-[#18B9AC] group transition-all duration-500">
                <div className="flex items-center   transition-all duration-300 p-2 w-full ">
                  <p className="p-2 group-hover:bg-white rounded-full">
                    <IoSettingsSharp className="group-hover:text-[#18B9AC]" />
                  </p>
                  <p className=" text-black group-hover:text-white ml-4">
                    Setting
                  </p>
                </div>
              </li>
              <li className="cursor-pointer rounded-full pr-10 my-2 hover:bg-[#18B9AC] group transition-all duration-500">
                <div className="flex items-center   transition-all duration-300 p-2 w-full ">
                  <p className="p-2 group-hover:bg-white rounded-full">
                    <IoLogOut className="group-hover:text-[#18B9AC]" />
                  </p>
                  <p className=" text-black group-hover:text-white ml-4">
                    Log out
                  </p>
                </div>
              </li>
            </ul>
          </div>
       

                {/* content */}
        
          <div className="flex flex-col px-5 ">

            <div className="flex items-center justify-between py-5">
              <div className="">
                <form className=" mx-auto  px-6 py-1 rounded-full bg-[#ECF0F3]  flex focus-within:border-gray-300">
                  <input
                    placeholder="Search anything"
                    className="bg-transparent w-full  focus:outline-none pr-4  border-0 focus:ring-0 px-0 "
                    type="text"
                    name="Search"
                  />
                  <button className="flex flex-row p-2 -mr-5 items-center justify-center  rounded-full  border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150  bg-white text-[#c9d0db]  tracking-wide border-transparent ">
                    <BiSearch className="text-[#56ACFB]" />
                  </button>
                </form>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-bold mr-2">EN</p>
                <button className="flex flex-row p-2 bgw items-center justify-center rounded-full  bg-[#D4F9D5] ">
                  <FcGlobe className="text-2xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-col mx-auto gap-5 items-center md:items-start bg-[#56ACFB] p-5 text-white rounded-xl w-4/5 md:w-full ">
              <div>
                <p className="md:text-xl text-center md:text-left ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  facere, minus sapiente, esse iste odio aut pariatur libero
                  sequi
                </p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div>
                <button className="px-8 py-2 bg-black text-white rounded-full">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="mt-5  p-5 ">

              <div className="flex items-center">
                <h1 className="text-xl font-bold">Video</h1>
                <h2 className="mx-5">Video all</h2>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-5 my-5 pb-5 border-b">
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/ex.jpg"}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col mx-4">
                    <h4>amirreza</h4>
                    <p className="text-xs text-[#777a7c]">karimuddini</p>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/ex.jpg"}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col mx-4">
                    <h4>amirreza</h4>
                    <p className="text-xs text-[#777a7c]">karimuddini</p>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/ex.jpg"}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col mx-4">
                    <h4>amirreza</h4>
                    <p className="text-xs text-[#777a7c]">karimuddini</p>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/ex.jpg"}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col mx-4">
                    <h4>amirreza</h4>
                    <p className="text-xs text-[#777a7c]">karimuddini</p>
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/ex.jpg"}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col mx-4">
                    <h4>amirreza</h4>
                    <p className="text-xs text-[#777a7c]">karimuddini</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <h1 className="text-xl font-bold">Team Member</h1>
                <h2 className="mx-5">Video all</h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-6 my-5 pb-5 border-b">
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/face.jpg"}
                    width={60}
                    height={60}
                    className="rounded-full p-[1px] border border-green-600"
                  />
                  <h4>amirreza</h4>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/face.jpg"}
                    width={60}
                    height={60}
                    className="rounded-full p-[1px] border border-green-600"
                  />
                  <h4>amirreza</h4>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/face.jpg"}
                    width={60}
                    height={60}
                    className="rounded-full p-[1px] border border-green-600"
                  />
                  <h4>amirreza</h4>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/face.jpg"}
                    width={60}
                    height={60}
                    className="rounded-full p-[1px] border border-green-600"
                  />
                  <h4>amirreza</h4>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/face.jpg"}
                    width={60}
                    height={60}
                    className="rounded-full p-[1px] border border-green-600"
                  />
                  <h4>amirreza</h4>
                </div>
                <div className="flex flex-col items-center ">
                  <Image
                    alt="img"
                    src={"/image/face.jpg"}
                    width={60}
                    height={60}
                    className="rounded-full p-[1px] border border-green-600"
                  />
                  <h4>amirreza</h4>
                </div>
              </div>

              <div className="flex items-center justify-around">
                <div className="flex items-center shadow-xl pr-8 py-2 pl-2 rounded-xl">
                  <div className="bg-[#D9FDFD] p-3 rounded-lg">
                    <BiSolidVideo className="text-2xl" />
                  </div>

                  <div className="ml-5">
                    <h1 className="text-lg">20</h1>
                    <p className="text-xs text-[#777a7c]">Video</p>
                  </div>
                </div>
                <div className="flex items-center shadow-xl pr-8 py-2 pl-2 rounded-xl">
                  <div className="bg-[#D9FDFD] p-3 rounded-lg">
                    <BiSolidUserPlus className="text-2xl" />
                  </div>

                  <div className="ml-5">
                    <h1 className="text-lg">20</h1>
                    <p className="text-xs text-[#777a7c]">Video</p>
                  </div>
                </div>
                <div className="flex items-center shadow-xl pr-8 py-2 pl-2 rounded-xl">
                  <div className="bg-[#D9FDFD] p-3 rounded-lg">
                    <BiSolidChat className="text-2xl" />
                  </div>

                  <div className="ml-5">
                    <h1 className="text-lg">20</h1>
                    <p className="text-xs text-[#777a7c]">Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
                  {/* rigth side */}
        <div className="bg-blue-300 hidden lg:flex flex-col px-5">
          <div className="flex items-center justify-between gap-10 mt-5">
            <div>
              <button className="flex flex-row p-2  items-center justify-center rounded-full  bg-white ">
                <IoMdNotifications className="text-[#0EB5A8] text-2xl" />
              </button>
            </div>

            <div className="flex bg-white gap-5 pl-2 pr-10 py-1.5 rounded-full ">
              <div className="">
                <FcManager className="bg-green-800 text-2xl rounded-full " />
              </div>
              <div>
                <p>amir</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white mt-5 rounded-xl">
            <div className="flex justify-center items-center gap-3 my-3">
              <div className="">
                <Image
                  alt="img"
                  src={"/image/ex.jpg"}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="border-2 p-[1px] border-[#53C9BF] rounded-xl">
                <Image
                  alt="img"
                  src={"/image/ex.jpg"}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <div className="">
                <Image
                  alt="img"
                  src={"/image/ex.jpg"}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div>
              <h1>Recording</h1>
              <p className="text-xs text-[#777a7c] text-center">R.J Palacio</p>
            </div>

            <div className="flex">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl mb-2">Comments</h2>

            <div className="flex items-center  bg-white p-1 rounded-xl">
              <div>
                <Image
                  alt="img"
                  src={"/image/ex.jpg"}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col mx-4">
                <h4>amirreza</h4>
                <p className="text-xs">karimuddini</p>
              </div>

              <div className="text-xs">02:20:03</div>
            </div>

            <div className="flex items-center my-2 bg-white p-1 rounded-xl">
              <div>
                <Image
                  alt="img"
                  src={"/image/ex.jpg"}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col mx-4">
                <h4>amirreza</h4>
                <p className="text-xs">karimuddini</p>
              </div>

              <div className="text-xs">02:20:03</div>
            </div>
            <div className="flex items-center  bg-white p-1 rounded-xl">
              <div>
                <Image
                  alt="img"
                  src={"/image/ex.jpg"}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col mx-4">
                <h4>amirreza</h4>
                <p className="text-xs">karimuddini</p>
              </div>

              <div className="text-xs">02:20:03</div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="font-bold mb-2">Daily record limit for free</h1>
            <div className="bg-white rounded-lg p-3 flex items-center justify-between">
              <div className="">
                Record this week
                <BiSolidCapsule className="text-4xl mx-auto" />
              </div>
              <div className="border-4 border-r-[#D9FDFD] border-b-[#D9FDFD] border-[#03B2A4] rounded-full p-2 flex justify-center items-center">
                3/5
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
