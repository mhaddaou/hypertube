import Image from "next/image";
import { HeroSectionData } from "@/lib/Data/HeroSection";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import GetStars from "../sub/GetStars";
import ImageScroller from "../sub/ImageScroller";
import dynamic from "next/dynamic";
import { fetchHeroData } from "@/lib/features/Hero/hero";
import { changeHeroData } from "@/lib/features/HeroData/HeroData";

const ImageScrollerr = dynamic(() => import("../sub/ImageScroller"), {ssr : false})

function HeroSection() {
  const [active, setActive] = useState(false);
  const image = useAppSelector((state) => state.background);
  const dataHero = useAppSelector((state) => state.heroData);
  const dispatch  = useAppDispatch();
  const data = useAppSelector((state) => state.data)
  const starsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const genrsRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!active) {
      setTimeout(() => {
        if (
          starsRef.current &&
          titleRef.current &&
          genrsRef.current &&
          descRef.current
        ) {
          starsRef.current.classList.remove("animate-fade-right");
          titleRef.current.classList.remove("animate-fade-down");
          genrsRef.current.classList.remove("animate-fade-right");
          descRef.current.classList.remove("animate-fade-up");
        }
        setActive(true);
      }, 1200);
    }
    if (image.animation === false) {
      if (
        starsRef.current &&
        titleRef.current &&
        genrsRef.current &&
        descRef.current
      ) {
        starsRef.current.classList.add("animate-fade-right");
        genrsRef.current.classList.add("animate-fade-right");
        titleRef.current.classList.add("animate-fade-down");
        descRef.current.classList.add("animate-fade-up");
      }
      setTimeout(() => {
        if (
          starsRef.current &&
          titleRef.current &&
          genrsRef.current &&
          descRef.current
        ) {
          starsRef.current.classList.remove("animate-fade-right");
          titleRef.current.classList.remove("animate-fade-down");
          genrsRef.current.classList.remove("animate-fade-right");
          descRef.current.classList.remove("animate-fade-up");
        }
      }, 1200);
    }
  }, [image.animation]);

  return (
    <section className=" bg-background w-screen min-h-screen relative">
      <div className="absolute w-screen h-screen  flex justify-center items-center ">
        <div className="">
          <Image
            src={image.oldImage}
            alt="Background Image "
            fill
            style={{ objectFit: "cover" }}
            quality={100}

            unoptimized
          />
          
        </div>
      </div>
      <div className="w-screen h-screen absolute ">
        <div className=" w-full h-full flex justify-center items-center">
          <div
            className={` absolute  ${
              image.animation
                ? "w-screen h-screen transition-all duration-700 ease-out"
                : "w-0 h-0 "
            }  `}
          >
            <Image
              src={image.image} 
              alt="Background Image "
              unoptimized
              style={{ objectFit: "cover" }}
              fill
              quality={100}
              priority/>
          </div>
        </div>
      </div>
      <div className=" h-fit flex justify-center  items-center ">
        <div className="bg-black/50 absolute z-10 top-0 h-full w-full">
          <div className="w-full h-full flex flex-col md:gap-6 ">
            <div className="w-full h-[65%]  pl-[5%] ">
              <div className="h-full w-[90%]  md:w-[60%] flex flex-col justify-center">
                <div className="">
                <h1
                  ref={titleRef}
                  className="font-lemonada  text-white text-[44px] lg:text-[60px] animate-fade-down  lg:max-w-2xl "
                >
                  {dataHero.title}
                </h1>
                </div>
                <div ref={starsRef} className={` animate-fade-right flex items-center `}>
          <Image src="images/icons/star.svg" alt=" ic" width={35} height={10} className="w-4 mr-2 md:w-" />{" "}
          <span className="ml- text-xl md:text-5xl text-white font-praise md:pt-2">{dataHero.rating.toFixed(1)}</span>
                </div>
                <div
                  ref={genrsRef}
                  className="flex pt-2 md:pt-8 animate-fade-right flex-wrap font-marck-script text-sm md:text-xl lg:text-3xl text-white gap-3 md:gap-5 capitalize "
                >
                  {dataHero.genres?.map((item, index, arr) => {
                    return (
                      <p
                        key={index}
                        className={`pr-4 ${
                          index !== arr.length - 1
                            ? "border-color-primary border-r-[2px]"
                            : ""
                        }`}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="flex font-lemonada text-white/70 text-sm pt-1 md:pt-8">
                  <p className=" pr-4 border-white/70">{dataHero.year}</p>
                </div>
                <div ref={descRef} className="animate-fade-up overflow-hidden text-ellipsis">
                  <p className="font-lemonada line-clamp-3 text-white w-[95%] text-justify lg:text-start lg:w-[80%] pt-8  text-xs md:text-base">
                    {dataHero.summary}
                  </p>
                  <div className="pt-8">
                    <button className="text-white bg-color-primary px-5 py-2.5 lg:px-7 lg:py-4 font-poppins text-sm lg:text-xl flex items-center gap-2 rounded-md">
                      <Image
                        src="/images/icons/display.svg"
                        alt="display"
                        className="w-3 lg:w-5"
                        width={17}
                        height={40}
                      />
                      Watch now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[35%]   ">
              <div className=" w-full h-full flex items-center gap-7 ">
                <ImageScrollerr movies={data.data?.movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(HeroSection);