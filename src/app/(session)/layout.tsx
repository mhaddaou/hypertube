"use client"

import React, { useState } from 'react';
import Image from "next/image";

export default function SessionLayout({children}:{children: React.ReactNode}) {

  return (
    <div className="h-screen flex justify-between items-center bg-color-secondary">
      <img className="w-1/2 h-screen rounded-r-6xl object-cover" src="https://s3-alpha-sig.figma.com/img/7c2b/e872/5eaf4f6ee423a5d1f141fba5af39e683?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VW86jMJzXmSpJvD28pErL7S1TcYdF4qvztiO34GPVHV4QEbEqHsLlz8dLYJI0ODvc~TthTBiUMXIwO~EpU2NZO2RS5wbKGuLeOnRszF3zMuVhSzeNKUaApKHeiz-XV-lRNTVwybjaBaOqExzaXxY5ZmQKdvE~Q69EP590gZddxLU8zQLRyXUVQix9FMPmtTTGMwkGM495GNg2Bvk1b6gDwwgzrfrdvWbRHD4jzIZQP655rcWa9tYttJ8fSEeZiD4-kaUyidNGc~F1ejtc3yDw6bpPUqLaDp8Lzld6xHN3li4b2zhwSG-WGj3XKEXbvSuY9XIdZEBt~6uHJxLbu9RjQ__" alt="" />
      <div className="w-1/2 flex justify-center items-center">
        {/* <img src="" alt="" /> */}
        <div className="flex flex-col items-center max-w-md">
          <Image src='/images/icons/hypertube.svg' width={435} height={435} alt=""/>
          {children}
        </div>
      </div>
    </div>
  );
}