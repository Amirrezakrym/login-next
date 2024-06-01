import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import localFont from 'next/font/local'
// icon
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagram  } from "react-icons/fa";
// font
const titleFont = localFont({src : '../public/image/Fonts/DMSerifDisplay-Regular.ttf'})

export default function Home() {
  return (
    <>
    {/*  Level-up your */}
      <section className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-16 lg:flex-row text-center lg:text-left justify-around items-center gap-5">
            <div className=" order-2 lg:order-none max-w-lg xl:max-w-md flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-5xl md:text-7xl font-bold max-w-sm`}>
                Level-up your Skills<span className="w-3 h-3 rounded-full bg-blue-900 inline-block"></span>
              </h2>
              <p className="max-w-xs text-[#545656]">
                It is a long established fact that a reader will be distracted
                by the of
              </p>
             
              <div className="flex justify-between items-center gap-3">
              <button className="text-xs mx-auto md:mx-0 bg-blue-800 text-white hover:text-blue-800 px-4 md:px-8 py-4 rounded-xl  after:bg-blue-400 font-medium z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ">
                Try it for free
              </button>

              <button className="text-xs border border-white hover:border-blue-700 px-4 md:px-8 py-4 rounded-xl transition-all duration-300 ">see how it work</button>
              </div>
            </div>

            <div className="order-1 lg:order-none max-w-[453px] mx-auto lg:max-w-none lg:mx-0">
            <Image 
                className="absolute z-[-1]"
                alt=""
                src={"/image/blob.svg"}
                width={400}
                height={200}
              ></Image>
              <Image
                className=""
                alt=""
                src={"/image/img/1.png"}
                width={400}
                height={200}
              ></Image>
            </div>
          </div>
        </div>
      </section>

       {/* Brand */}
    <section className="mt-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          <Image alt="brand" src={'/image/brands/01.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/image/brands/02.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/image/brands/03.svg'} width={100} height={100}></Image>
          <Image alt="brand" src={'/image/brands/04.svg'} width={100} height={100}></Image>
        </div>
      </div>
    </section>

      {/* Stary Your journey */}
    <section className="mt-28">
      <div className="container mx-auto">

        <div className="flex flex-col justify-center items-center gap-5 text-center mb-10">
          <h1 className={`${titleFont.className} text-5xl md:text-7xl font-bold max-w-3xl`}>Stary Your journey with 3 simple steps</h1>
        </div>

    </div>
    </section>

    {/* Start your Aduenture */}
    <section className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-16 lg:flex-row text-center lg:text-left justify-around items-center gap-5">
            <div className=" order-2 lg:order-none max-w-lg xl:max-w-md flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-5xl md:text-7xl font-bold max-w-sm`}>
                Start your Aduenture<span className="w-3 h-3 rounded-full bg-blue-900 inline-block"></span>
              </h2>
              <p className="max-w-sm text-[#545656]">
              There are many variations of the passages of lorem Ipsum from available,variations of the passages
              </p>

              <div className="flex justify-between items-center gap-5">
        
              <button className="text-blue-700">Learn More <BiChevronRight  className="inline-block text-xl"/></button>
              </div>
            </div>

            <div className="order-1 lg:order-none max-w-[453px] mx-auto lg:max-w-none lg:mx-0">
            <Image 
                className="absolute z-[-1]"
                alt=""
                src={"/image/blob.svg"}
                width={400}
                height={200}
              ></Image>
              <Image
                className=""
                alt="Contact"
                src={"/image/img/2.png"}
                width={400}
                height={200}
              ></Image>
            </div>
          </div>
        </div>
    </section>

    {/* Start your Aduenture */}
    <section className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-16 lg:flex-row text-center lg:text-left justify-around items-center gap-5">
            
            <div className="order-1 lg:order-none max-w-[453px] mx-auto lg:max-w-none lg:mx-0">
            <Image 
                className="absolute z-[-1]"
                alt=""
                src={"/image/blob.svg"}
                width={400}
                height={200}
              ></Image>
             <Image
                className=""
                alt="Contact"
                src={"/image/img/3.png"}
                width={400}
                height={200}
              ></Image>
            </div>
            <div className=" order-2 lg:order-none max-w-lg xl:max-w-md flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-5xl md:text-7xl font-bold max-w-sm`}>
                Leveling up your career<span className="w-3 h-3 rounded-full bg-blue-900 inline-block"></span>
              </h2>
              <p className="max-w-sm text-[#545656]">
              There are many variations of the passages of lorem Ipsum from available,variations of the passages
              </p>

              <div className="flex justify-between items-center gap-5">
        
              <button className="text-blue-700">Learn More <BiChevronRight  className="inline-block text-xl"/></button>
              </div>
            </div>
          </div>
        </div>
    </section>

     {/* Start your Aduenture */}
     <section className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-16 lg:flex-row text-center lg:text-left justify-around items-center gap-5">
            <div className=" order-2 lg:order-none max-w-lg xl:max-w-lg flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-5xl md:text-7xl font-bold`}>
                And become an expert Guru<span className="w-3 h-3 rounded-full bg-blue-900 inline-block"></span>
              </h2>
              <p className="max-w-sm text-[#545656]">
              There are many variations of the passages of lorem Ipsum from available,variations of the passages
              </p>

              <div className="flex justify-between items-center gap-5">
        
              <button className="text-blue-700">Learn More <BiChevronRight  className="inline-block text-xl"/></button>
              </div>
            </div>

            <div className="order-1 lg:order-none max-w-[453px] mx-auto lg:max-w-none lg:mx-0">
            <Image 
                className="absolute z-[-1]"
                alt=""
                src={"/image/blob.svg"}
                width={400}
                height={200}
              ></Image>
              <Image
                className=""
                alt="Contact"
                src={"/image/img/4.png"}
                width={400}
                height={200}
              ></Image>
            </div>
          </div>
        </div>
    </section>

{/* Start your Aduenture */}
<section className="mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col px-16 lg:flex-row text-center lg:text-left justify-around items-center gap-5">
            
            <div className="order-1 lg:order-none max-w-[453px] mx-auto lg:max-w-none lg:mx-0">
            <Image 
                className="absolute z-[-1]"
                alt=""
                src={"/image/blob.svg"}
                width={400}
                height={200}
              ></Image>
              <Image
                className=""
                alt="Contact"
                src={"/image/img/5.png"}
                width={400}
                height={200}
              ></Image>
            </div>
            <div className=" order-2 lg:order-none max-w-lg xl:max-w-md flex flex-col items-center lg:items-start gap-8">
              <h2 className={`${titleFont.className} text-5xl md:text-7xl font-bold max-w-xl`}>
                Best creative courses<span className="w-3 h-3 rounded-full bg-blue-900 inline-block"></span>
              </h2>
              <p className="max-w-sm text-[#545656]">
              There are many variations of the passages of lorem Ipsum from available,variations of the passages
              </p>

              <div className="flex justify-between items-center gap-5">
        
              <button className="text-blue-700">Learn More <BiChevronRight  className="inline-block text-xl"/></button>
              </div>
            </div>
          </div>
        </div>
    </section>
    

    {/* Footer */}
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mx-auto justify-between px-10 items-center">

          <div className="mb-8 text-center lg:text-left max-w-sm">
            <Link href={'#'} className="inline-block"> <Image alt="logo" src="/image/logo.svg" width={150} height={150}></Image> </Link>
            <p className="my-5 text-[#545656]"> It is a long established fact that a reader will be distracted lookings.</p>
            <div className="flex justify-center lg:justify-start items-center gap-10">
            <Link href={'#'}> <FaFacebookF /> </Link>
            <Link href={'#'}> <FaTwitter /> </Link>
            <Link href={'#'}> <FaLinkedinIn /> </Link>
            <Link href={'#'}> <FaInstagram /> </Link>
            </div>
          </div>


          <div className="flex flex-col lg:flex-row  gap-16">

            <div className="flex flex-col text-center lg:text-start gap-3 max-w-sm">
              <Link href={'#'} className={`${titleFont.className} text-xl md:text-2xl`}>Pages</Link>
              <Link href={'#'} className="text-[#545656]">About Us</Link>
              <Link href={'#'} className="text-[#545656]">Our Project</Link>
              <Link href={'#'} className="text-[#545656]">Our Team</Link>
              <Link href={'#'} className="text-[#545656]">Contact Us</Link>
              <Link href={'#'} className="text-[#545656]">Servies</Link>
            </div>

            <div className="flex flex-col text-center lg:text-start gap-3 max-w-sm">
              <Link href={'#'} className={`${titleFont.className} text-xl md:text-2xl`}>Services</Link>
              <Link href={'#'} className="text-[#545656]">Kitchen</Link>
              <Link href={'#'} className="text-[#545656]">Living Area</Link>
              <Link href={'#'} className="text-[#545656]">Bathroom</Link>
              <Link href={'#'} className="text-[#545656]">Dinning Hall</Link>
              <Link href={'#'} className="text-[#545656]">Bedroom</Link>
            </div>

            <div className="flex flex-col text-center lg:text-start gap-3 max-w-48">
              <div className={`${titleFont.className} text-xl md:text-2xl`}>Contact</div>
              <div className="text-[#545656]">55 East Birchwood Ave. Brooklyn, New York 11201</div>
              <div className="text-[#545656]">Amirrezakrym@gmail.com</div>
              <div className="text-[#545656]">(000) 000 - 0000</div>
            </div>

          </div>

        </div>
        <p className="mx-auto text-center mt-20 py-5 text-[#545656]">Copyright ⓒ Amir.Co |Designed by Amirreza</p>
      </div>
    </section>
    </>
  );
}
