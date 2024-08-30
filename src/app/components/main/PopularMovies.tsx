"use client";
import React, { useState, useRef, useEffect } from "react";
import LayoutGrid from "../ui/layout-grid";
import Image from "next/image";

function PopularMovies() {
  return (
    <div className=" relative w-full    flex   ">
      <Image
        src="/images/images/backgroundPopular.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="bg"
      />
      <div className="w-full h-full bg-black/75 absolute"></div>
      <div className="w-full h-full relative flex flex-col pt-10  gap-14 justify-center items-center container ">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit ">
            <h1 className="font-lemonada font-bold  lg:text-[40px] capitalize text-white ">
              Popular Movies
            </h1>
            <div className="w-[52%] h-1 bg-color-primary rounded-full"></div>
          </div>
          <div>
            <button className="bg-color-primary flex text-xs md:text-base font-dmedium md:font-sans items-center  md:gap-4 px-2 md:px-4 py-1.5 rounded-md font-poppins text-black">
              View More
              <Image
                src="images/icons/arrowLeftCircle.svg"
                alt="icon"
                className="w-5 h-4"
                width={25}
                height={10}
              />
            </button>
          </div>
        </div>

        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="text-white ">
      <p className="font-bold md:text-4xl text-xl font-lemonada">The Menu</p>
      <p className="font-normal text-base "></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 font-lexend-Deca">
        A young couple travels to a remote island to eat at an exclusive
        restaurant where the chef has prepared a lavish menu, with some shocking
        surprises.
      </p>
      <div className="flex gap-5 mb-4">
        <div className="flex items-center gap-2">
          <Image src="images/icons/star.svg" alt=" ic" width={20} height={10} />{" "}
          <span className="mr-2">3.6</span>
          <div className="w-[1.5px] h-[19px] bg-[#B6AFAF]"></div>
        </div>
        <div className="flex items-center gap-2 text-[#B6AFAF]">
          Horror <div className="w-1.5 h-1.5 bg-[#B6AFAF] rounded-full "></div>{" "}
          Comedy
        </div>
      </div>
      <button className="bg-color-primary text-slate-100 px-4 rounded-md py-2 flex items-center gap-2">
        <Image
          src="/images/icons/display.svg"
          alt="display"
          width={12}
          height={40}
        />
        <span className="-mt-1">watch now</span>
      </button>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="text-white ">
      <p className="font-bold md:text-4xl text-xl font-lemonada">The Menu</p>
      <p className="font-normal text-base "></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 font-lexend-Deca">
        A young couple travels to a remote island to eat at an exclusive
        restaurant where the chef has prepared a lavish menu, with some shocking
        surprises.
      </p>
      <div className="flex gap-5 mb-4">
        <div className="flex items-center gap-2">
          <Image src="images/icons/star.svg" alt=" ic" width={20} height={10} />{" "}
          <span className="mr-2">3.6</span>
          <div className="w-[1.5px] h-[19px] bg-[#B6AFAF]"></div>
        </div>
        <div className="flex items-center gap-2 text-[#B6AFAF]">
          Horror <div className="w-1.5 h-1.5 bg-[#B6AFAF] rounded-full "></div>{" "}
          Comedy
        </div>
      </div>
      <button className="bg-color-primary text-slate-100 px-4 rounded-md py-2 flex items-center gap-2">
        <Image
          src="/images/icons/display.svg"
          alt="display"
          width={12}
          height={40}
        />
        <span className="-mt-1">watch now</span>
      </button>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="text-white ">
      <p className="font-bold md:text-4xl text-xl font-lemonada">The Menu</p>
      <p className="font-normal text-base "></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 font-lexend-Deca">
        A young couple travels to a remote island to eat at an exclusive
        restaurant where the chef has prepared a lavish menu, with some shocking
        surprises.
      </p>
      <div className="flex gap-5 mb-4">
        <div className="flex items-center gap-2">
          <Image src="images/icons/star.svg" alt=" ic" width={20} height={10} />{" "}
          <span className="mr-2">3.6</span>
          <div className="w-[1.5px] h-[19px] bg-[#B6AFAF]"></div>
        </div>
        <div className="flex items-center gap-2 text-[#B6AFAF]">
          Horror <div className="w-1.5 h-1.5 bg-[#B6AFAF] rounded-full "></div>{" "}
          Comedy
        </div>
      </div>
      <button className="bg-color-primary text-slate-100 px-4 rounded-md py-2 flex items-center gap-2">
        <Image
          src="/images/icons/display.svg"
          alt="display"
          width={12}
          height={40}
        />
        <span className="-mt-1">watch now</span>
      </button>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="text-white ">
      <p className="font-bold md:text-4xl text-xl font-lemonada">The Menu</p>
      <p className="font-normal text-base "></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 font-lexend-Deca">
        A young couple travels to a remote island to eat at an exclusive
        restaurant where the chef has prepared a lavish menu, with some shocking
        surprises.
      </p>
      <div className="flex gap-5 mb-4">
        <div className="flex items-center gap-2">
          <Image src="images/icons/star.svg" alt=" ic" width={20} height={10} />{" "}
          <span className="mr-2">3.6</span>
          <div className="w-[1.5px] h-[19px] bg-[#B6AFAF]"></div>
        </div>
        <div className="flex items-center gap-2 text-[#B6AFAF]">
          Horror <div className="w-1.5 h-1.5 bg-[#B6AFAF] rounded-full "></div>{" "}
          Comedy
        </div>
      </div>
      <button className="bg-color-primary text-slate-100 px-4 rounded-md py-2 flex items-center gap-2">
        <Image
          src="/images/icons/display.svg"
          alt="display"
          width={12}
          height={40}
        />
        <span className="-mt-1">watch now</span>
      </button>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2Q3ZTU1NjMtNjYwZS00MGI4LThjYjMtOTIwYjBhOTBmMGE3XkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_FMjpg_UX1123_.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UY2048_.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg",
  },
];

export default React.memo(PopularMovies);
