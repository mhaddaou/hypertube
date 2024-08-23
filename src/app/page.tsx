'use client'

import Image from "next/image";
import styles from "./page.module.css";

import Image1 from '../../public/images/images/backgroundOne.svg'
import Image2 from '../../public/images/images/first.svg'
import Image3 from '../../public/images/images/2.svg'
import Image4 from '../../public/images/images/3.svg'
import Image5 from '../../public/images/images/4.svg'
import Image6 from '../../public/images/images/5.svg'
import Image7 from '../../public/images/images/6.svg'
import Image8 from '../../public/images/images/7.svg'
import { HeroFilms } from "./Types/Interfaces/Interfaces";
import { useState } from "react";
import GetImage from "./components/sub/ImageScroller";
import ImageScroller from "./components/sub/ImageScroller";


const Images : HeroFilms[] = [
  {id: 2, image: Image2, selected: false},
  {id: 3, image: Image3, selected: false},
  {id: 1, image: Image4, selected: false},
  {id: 4, image: Image1, selected: true},
  {id: 5, image: Image5, selected: false},
  {id: 6, image: Image6, selected: false},
  {id: 7, image: Image7, selected: false},
  {id: 8, image: Image8, selected: false},
]




export default function Home() {
  return (
    <main className=" bg-background w-screen min-h-screen">
      <div>
        <Image
          src="/images/images/backgroundOne.svg" // Adjust the path accordingly
          alt="Background Image"
          layout="fill" // Makes the image fill its parent element
          objectFit="cover" // Ensures the image covers the element
          // onLoadingComplete={handleImageLoad} // Optional: for handling image load events
          priority // Optional: to load the image early
        />
        <div className="bg-black/50 absolute z-10 top-0 h-full w-full">
          <div className="w-full h-full">
            <div className="w-full h-[65%]  pl-[5%] ">
              <div className="h-full w-[60%] flex flex-col justify-end">
                <h1 className="font-lemonada text-white text-[80px] ">
                  <p>Spider man</p>
                  <p>No way Home</p>
                </h1>
                <div className="">
                  <Image
                    src="images/icons/rating4.svg"
                    width={400}
                    height={100}
                    alt="rating"
                  />
                </div>
                <div className="flex pt-8 font-marck-script text-3xl text-white gap-5 capitalize">
                  <p className="border-r-[2px] pr-4 border-color-primary">
                    crime
                  </p>
                  <p className="border-r-[2px] pr-4 border-color-primary">
                    Drama
                  </p>
                  <p>Mystery</p>
                </div>
                <div className="flex gap-5 font-lemonada text-white/70 text-sm pt-8">
                  <p className="border-r-[2px] pr-4 border-white/70">2021</p>
                  <p className="border-r-[2px] pr-4 border-white/70">
                    1 hour 55 minutes
                  </p>
                  <p>Sci-fi</p>
                </div>
                <p className="font-lemonada text-white w-[80%] pt-8">
                  Scelerisque sed ultricies tristique. Mi in vivamus aliquam
                  varius eu felis. Id ultricies diam turpis mi tincidunt. Ut
                  morbi sed urna tempor imperdiet eu scelerisque egestas.
                  Interdum mi orci suspendisse in s...
                </p>
                <div className="pt-8">
                  <button className="text-white bg-color-primary px-7 py-4 font-poppins text-xl flex items-center gap-2 rounded-md">
                    <Image
                      src="/images/icons/display.svg"
                      alt="display"
                      width={17}
                      height={40}
                    />
                    Watch now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[35%]   ">
              <div className=" w-full h-full flex items-center gap-7 ">
              <ImageScroller images={Images} />     
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
