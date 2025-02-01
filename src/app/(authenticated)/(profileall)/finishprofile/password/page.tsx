"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SetNewPassword from './components/newpassowrd';
import { useUserInfo } from '@/app/components/sub/UserInfoContext';

export default function NewPassword() {
  const { userInfo, isLoading } = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && userInfo && userInfo.password_is_set) {
      router.push('/profile');
    }
  }, [isLoading, userInfo, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-color-secondary">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-color-secondary'>
      <SetNewPassword />
    </div>
  );
}

// "use client"

// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation'
// import { InputSection } from '@/app/(session)/components/InputUtils';
// import { PrimaryActionButton } from '@/app/(session)/components/Buttons';
// import SetNewPassword from './components/newpassowrd';


// export default function NewPassword() {
//   return (
//         <div className='flex justify-center items-center w-screen h-screen bg-color-secondary'>
//             <SetNewPassword />
//         </div>
//   );
// }