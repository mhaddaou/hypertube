"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { InputSection } from '@/app/(session)/components/InputUtils';
import { PrimaryActionButton } from '@/app/(session)/components/Buttons';
import SetNewPassword from './components/newpassowrd';


export default function NewPassword() {
  return (
        <div className='flex justify-center items-center w-screen h-screen bg-color-secondary'>
            <SetNewPassword />
        </div>
  );
}