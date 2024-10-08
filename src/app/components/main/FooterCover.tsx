import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrementIndex, incrementIndex } from "@/lib/features/Hero/hero";

function FooterCover() {
  const data = useAppSelector((state) => state.data.moviesCover)
  const index = useAppSelector((state) => state.data.index)
  const dispatch = useAppDispatch()

  useEffect(() =>{
    console.log(data[0]?.large_cover_image, 'this is the image')
  })
  return (
    <div className="w-screen bg-[#0D0C0F]  lg:flex justify-center items-center py-52 hidden ">
      <div className="w-full h-[350px] bg-[##db930e] container rounded-xl relative">
        <div className="w-full h-full relative ">
          <div className="w-full h-full bg-black/60 absolute z-10 ">
            <div className="w-full h-full relative flex">

              <button type="button" title="prev" onClick={() => dispatch(decrementIndex())}>
              <Image src='/images/icons/coverLeft.svg' className={`absolute ${index === 0 ? 'hidden' : 'block'} cursor-pointer z-50 -left-5 top-1/2 -translate-y-1/2`}  width={35} height={35} alt=""/>
                </button>
                <button type="button" title="next" onClick={() => dispatch(incrementIndex())}>
              <Image src='/images/icons/coverRight.svg' className={`absolute ${index === 2 ? 'hidden' : 'block'} -right-5 top-1/2 -translate-y-1/2`} width={35} height={10} alt=""/> 

                </button>
            </div>
          </div>
          <Image
            src={data[index]?.large_cover_image}
            alt=""
            style={{ objectFit: "cover" }}
            fill
            unoptimized
            className="rounded-2xl"
          />
          <div className="w-full h-full relative z-20 flex">
            <div className="w-full  h-full relative ">
              <div className="absolute left-20 -top-20  w-[66vw] max-w-3xl  h-full flex text-white items-center  gap-10 ">
                <div className="relative min-w-[289px] h-[329px] ">
                  <Image
                    draggable="false"
                    src={data[index]?.large_cover_image}
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
                      {data[index]?.title}
                    </p>
                    <Image
                      src="/images/icons/rating4.svg"
                      alt=""
                      width={150}
                      height={100}
                    />
                  </div>
                  <div className=" w-[80%] text-ellipsis">
                    <p className="text-[#BABFC9] line-clamp-3 font-lemonada text-sm font-semibold">
                      {data[index]?.summary}
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
