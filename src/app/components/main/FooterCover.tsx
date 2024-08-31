import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function FooterCover() {
  return (
    <div className="w-screen bg-[#0D0C0F]  lg:flex justify-center items-center py-52 hidden ">
      <div className="w-full h-[350px] bg-[##db930e] container rounded-xl relative">
        <div className="w-full h-full relative ">
          <div className="w-full h-full bg-black/60 absolute z-10"></div>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BNGM1ZjY5MGQtMGNmNy00ZjVmLTkyNTYtMTQwOGEyMTU4NzgxXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg"
            alt=""
            style={{ objectFit: "cover" }}
            fill
            unoptimized
            className="rounded-2xl"
          />
          <div className="w-full h-full relative z-20 flex">
            <div className="w-full  h-full relative ">
              <div className="absolute left-20 -top-20  w-[66vw] max-w-3xl  h-full flex text-white items-center  gap-10">
                <div className="relative min-w-[289px] h-[329px] ">
                  <Image
                    draggable="false"
                    src="https://m.media-amazon.com/images/M/MV5BNGM1ZjY5MGQtMGNmNy00ZjVmLTkyNTYtMTQwOGEyMTU4NzgxXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                    fill
                    unoptimized
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex h-full flex-col gap-5 pt-10  justify-center ">
                  <div className="flex items-center gap-4 ">
                    <p className="text-white font-lemonada text-xl font-bold">
                      Non Negotiable
                    </p>
                    <Image
                      src="/images/icons/rating4.svg"
                      alt=""
                      width={150}
                      height={100}
                    />
                  </div>
                  <div className=" w-[80%]">
                    <p className="text-[#BABFC9] font-lemonada text-sm font-semibold">
                      Alan Binder is a skillful hostage negotiator, the best in
                      Mexico, who will soon face the most crucial case of his
                      career ...
                    </p>
                  </div>
                  <div>
                    <button className="bg-color-primary  flex items-center gap-2 px-3.5 py-3 rounded-md">
                      <Image
                        src="/images/icons/display.svg"
                        alt=""
                        width={13}
                        height={10}
                      />
                      <span className="-mt-1 capitalize font-Poppins text-black">
                        watch now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%]  h-full  gap-5 relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FooterCover);
