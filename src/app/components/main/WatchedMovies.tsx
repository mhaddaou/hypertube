import { useAppSelector } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function WatchedMovies() {
  const watchedList = useAppSelector((state) => state.watchedMovies);

  return (
    <section className="w-full pb-10   bg-green-500 relative">
      <Image
        alt="bg-img"
        src="/images/images/backgroundWatched.jpg"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="w-full h-full absolute bg-black/75 "></div>
      <div className="w-full container text-white  relative  pt-28">
        <div className="w-full flex items-center justify-between">
          <div className="w-fit ">
            <h1 className="font-lemonada font-bold lg:text-[40px] capitalize text-white">
              watch again
            </h1>
            <div className="w-[51%] h-1 bg-color-primary rounded-full"></div>
          </div>
          <button className="w-fit ">
            <div className="flex items-end gap-1">
              <h1 className="font-lexend-Deca  font-extralight  lg:font-medium  text-[9px] md:text-[10px] lg:text-[12px] capitalize text-white">
                See More
              </h1>
              <div className="w-4 lg:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] mt-1 bg-color-primary rounded-full"></div>
          </button>
        </div>
        <div className="w-full container pt-16 flex  justify-between gap-3 items-center">
          <div className="flex-1  flex flex-wrap justify-center items-center gap-6">
            {watchedList.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-[95%] md:w-[45%] lg:w-[250px]   rounded-xl"
                >
                  <motion.img
                    className="w-full h-[300px] object-fill rounded-xl"
                    src={item.img}
                  />
                  <p className="font-lemonada text-color-primary text-lg pt-5 r">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(WatchedMovies);
