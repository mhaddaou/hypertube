"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-screen ">
      {isOpenModal && (
        <div className="w-full bg-black/90 absolute  z-30">
          <div className="w-[90%] mx-auto bg--500 flex justify-between py-8  items-center">
            <button
              title="back"
              className="bg-color-primary px-2 flex justify-center items-center rounded-md py-0.5"
              onClick={() => setIsOpenModal(false)}
            >
              <Image
                src="/images/icons/btn-back.svg"
                alt=""
                width={30}
                height={10}
              />
            </button>
            <div className="w-64 border-[1.5px] py-2.5 pr-1 pl-5   border-white/50 rounded-md flex items-center gap-2 mr-6">
              <Image
                src="/images/icons/searchHeader.svg"
                alt="search"
                width={19}
                height={15}
              />
              <input
                className=" rounded-md bg-inherit h-full flex-1 outline-none text-sm placeholder:text-sm/relaxed text-color-gray"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      )}
      <div className=" w-[90%] md:w-[95%] mx-auto flex items-center justify-between text-color-gray font-poppins capitalize py-4 relative z-20 ">
        {/* log */}

        <div>
          <Link href="/">
            <Image
              src="/images/icons/logo.svg"
              alt="logo"
              width={150}
              height={100}
            />
          </Link>
        </div>
        <div></div>
        <div className="hidden md:block">
          <div className="w-64 border-[1.5px] py-1.5 pr-1 pl-5  border-white/50 rounded-md flex items-center gap-2">
            <Image
              src="/images/icons/searchHeader.svg"
              alt="search"
              width={19}
              height={15}
            />
            <input
              className=" rounded-md bg-inherit h-full flex-1 outline-none text-sm placeholder:text-sm/relaxed "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex gap-16 ">
          <div className="gap-6 flex items-center">
            <button
              title="search"
              className="relative w-7 h-7 mt-1 md:hidden"
              onClick={() => setIsOpenModal(true)}
            >
              <Image src="/images/icons/searchHeader.svg" alt="search" fill />
            </button>
            <button className=" border-[1px] rounded-md px-3.5 py-[5px]">
              Sign in
            </button>
          </div>
          <div className="hidden md:block">
            <button className="rounded-md px-4 py-[7px] bg-color-primary text-black">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);
