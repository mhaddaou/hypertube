"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/lib/hooks";

function LoggedInHeader() {
  const userImageUrl = useAppSelector((state) => state.userData.userData?.image_url);

  return (
    <div className="bg-black fixed top-0 z-50 w-full h-[60px] flex items-center justify-between  px-2 sm:px-4 border-b-[1px] border-white/50">
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
      <div className="flex gap-3 sm:gap-5">
        <Image
          src="/images/icons/search-orange.svg"
          alt="search"
          width={30}
          height={30}
        />
        <Image
          src="/images/icons/favorites-orange.svg"
          alt="favorites"
          width={30}
          height={30}
        />
        <Image
          src={userImageUrl || "/images/images/defaultprofile.jpg"}
          alt="user"
          width={30}
          height={30}
          className="w-10 h-10 border border-color-primary rounded-full"
        />
        <div className="flex gap-2 px-2 sm:px-4 items-center w-fill h-10 border border-color-primary rounded-lg text-color-primary">
          <Image
            src="/images/icons/logout.svg"
            alt="logout"
            width={20}
            height={20}
          />
          <p className="hidden sm:block">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LoggedInHeader);
