import Image from "next/image";
import { GlobeDemo } from "../sub/GlobeDemo";
import React from "react";

function Footer() {
  return (
    <section className="w-full  bg-background text-white">
      <div className="w-full bg-[#22242A] pt-14">
        <div className="container w-full">
          <div className="w-fit">
            <h1 className="font-lemonada font-bold text-sm lg:text-[40px] capitalize text-white">
              Compatible Devices
            </h1>
            <div className="w-[59%] h-1 bg-color-primary rounded-full"></div>
          </div>
          <div className="flex justify-center flex-wrap gap-6 pb-10 pt-14">
            <div className=" w-[90%] md:w-[48%] lg:w-[355px] h-[310px] bg-black rounded-2xl flex flex-col items-center justify-around">
              <Image
                draggable="false"
                src="images/icons/tv.svg"
                className="w-32 lg:w-48"

                alt=""
                width={200}
                height={10}
              />
              <p className="text-xl font-lemonada font-bold">Smart Tv</p>
            </div>
            <div className=" w-[90%] md:w-[48%] lg:w-[355px] h-[310px] bg-black rounded-2xl flex flex-col items-center justify-around">
              <Image
                draggable="false"
                src="images/icons/macbook.svg"
                alt=""
                className="w-32 lg:w-48"
                width={200}
                height={10}
              />
              <p className="lg:text-xl font-lemonada font-bold flex flex-col gap-2 text-center text-sm">
                <span className="block">Laptop</span>
                <span>Desktop Computer</span>
              </p>
            </div>
            <div className="w-[90%] md:w-[48%] lg:w-[355px] h-[310px] bg-black rounded-2xl flex flex-col items-center justify-around">
              <Image
                draggable="false"
                src="images/icons/phone.svg"
                className="w-16 lg:w-20"
                alt=""
                width={90}
                height={0}
              />
              <p className="text-xl font-lemonada font-bold flex flex-col gap-2 text-center">
                <span className="block">Tablet</span>
                <span>Smartphone</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-black/20  relative ">
          <div className="absolute bottom-0 left-0 ">
            <Image
              draggable="false"
              src="/images/icons/footerD.svg"
              alt=""
              width={350}
              height={500}
            />
          </div>
          <div className="w-full bg--600 container bg--500">
            <div className="flex justify-center lg:justify-between flex-col lg:flex-row  bg--400 items-center">
              <div className="lg:w-1/2 w-full  flex flex-col sm:flex-row sm:justify-between  lg:flex-col lg:items-start items-center ">
                <Image
                  src="/images/icons/logo.svg"
                  alt=""
                  className="pt-5"
                  width={200}
                  height={10}
                />
                <p className="w-[55%] font-lemonada text-sm pt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  laoreet nisi at elit venenatis fringilla. Cras ut semper quam,
                  sit.
                </p>
              </div>
              <div className="lg:w-1/2 w-full flex justify-cente lg:items-end items-cente ">
                <GlobeDemo />
              </div>
            </div>
            <div className="w-full h-[1px] bg-color-primary relative z-50"></div>
            <div className="flex py-10 w-full justify-between">
              <div className="text-black relative">
                <p className="text-[#22242A] font-lexend-Deca font-semibold">
                  Follow
                </p>
              </div>
              <div className="flex gap-5">
                <button className=" font-lexend-Deca px-6 py-2  text-sm rounded-full border-[1.5px]">
                  Sing In
                </button>
                <button className="bg-color-primary text-black font-lexend-Deca px-6 py-2 text-sm rounded-full">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Footer);
