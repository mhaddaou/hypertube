"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useAuth } from "../sub/AuthContext";
import { useUserInfo } from "../sub/UserInfoContext";

function Logout(){

  const {setAuthenticated} = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logging out ...")
    fetch('http://127.0.0.1:8000/users/sign-out', {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        // Handle successful logout
        setAuthenticated(false);
        router.push('/register');
      } else {
        throw new Error('Logout failed');
      }
    })
    .catch(error => {
      console.error("Error: ", error);
    });
  };

  return(
    <div className="flex gap-2 px-2 sm:px-4 items-center w-fill h-10 border border-color-primary rounded-lg text-color-primary cursor-pointer" onClick={handleLogout}>
      <Image
        src="/images/icons/logout.svg"
        alt="logout"
        width={20}
        height={20}
      />
      <p className="hidden sm:block">Logout</p>
    </div>
  )
}

function LoggedInHeader() {
  const userImageUrl = useAppSelector((state) => state.userData.userData?.image_url);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const {userInfo} = useUserInfo();

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchClick = () => {
    setSearchVisible((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchTerm) {
        router.push(`/search?search_query=${searchTerm}`);
        setSearchVisible(false);
        setSearchTerm("");
      }
    }
    else if (e.key === "Escape") {
      setSearchVisible(false);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <div className="bg-black fixed top-0 z-50 w-full h-[60px] flex items-center px-2 sm:px-4 border-b-[1px] border-white/50">
      <div className={`flex-shrink-0 ${isSearchVisible && "hidden sm:block"}`}>
        <Link href="/">
          <Image
            src="/images/icons/logo.svg"
            alt="logo"
            width={150}
            height={100}
            className="cursor-pointer px-2 sm:px-4 aspect-auto"
          />
        </Link>
      </div>

      <div className="flex-grow mx-4">
        {isSearchVisible && (
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1.5 border border-color-primary rounded-md bg-black text-white focus:outline-none"
          />
        )}
      </div>

      <div className="flex gap-3 sm:gap-5 items-center flex-shrink-0">
        <div className="relative flex items-center">
          <Image
            src="/images/icons/search-orange.svg"
            alt="search"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>
        <Image
          src="/images/icons/favorites-orange.svg"
          alt="favorites"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <Link href="/profile">
          <Image
            // src={userImageUrl || "/images/images/defaultprofile.jpg"}
            src={userInfo?.image_url || "/images/images/defaultprofile.jpg"}
            alt="user"
            width={30}
            height={30}
            className="w-10 h-10 border border-color-primary rounded-full cursor-pointer"
          />
        </Link>
        <Logout/>
        {/* <div className="flex gap-2 px-2 sm:px-4 items-center w-fill h-10 border border-color-primary rounded-lg text-color-primary cursor-pointer">
          <Image
            src="/images/icons/logout.svg"
            alt="logout"
            width={20}
            height={20}
          />
          <p className="hidden sm:block">Logout</p>
        </div> */}
      </div>
    </div>
  );
}

export default React.memo(LoggedInHeader);
