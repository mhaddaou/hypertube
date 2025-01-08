"use client"

import React, { useState } from 'react';
import Image from "next/image";

export default function SessionLayout({children}:{children: React.ReactNode}) {

  return (
    <div className="h-screen flex justify-between items-center bg-color-secondary">
      <img className="w-1/2 h-screen rounded-r-6xl object-cover" src="https://s3-alpha-sig.figma.com/img/7c2b/e872/5eaf4f6ee423a5d1f141fba5af39e683?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ElRr8n4RWp-r6BdBVj1gLN~2S9RPslfIWaP463BdHff-cT6sU~UjQH21Oy7JuV8rjIsk1-ukFlZomh7Z5K2oRhUnRSefN3R2JIhWx3bC7UxxU2WtuiNRtCrHa1YkfJqLE2J2jKgJyRUM6OtCbxLdH9wRddlgjz3gpfZYP94hzmSZ7QWfmO0JuEjwQtq2WiN5HQBHCMDHLrw4O51eKKdjTATYBSLqv4IawlaOKLq1QKinB2sP82DQegwFBWDcsg47DyRVFsrLmYMtI70DcWewk01ONv2zcoiTPSqWv2-~wVY8AVYXKJRFCND4XcBukRPz8cnGZm-jodu18aBHktyj7Q__" alt="" />
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