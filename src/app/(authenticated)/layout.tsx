"use client"

import React, { useEffect } from 'react';
import { useUserInfo } from '../components/sub/UserInfoContext';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { userInfo, isLoading } = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && userInfo) {
      if (!userInfo.password_is_set) {
        router.push('/finishprofile/password');
      } else if (!userInfo.profile_is_finished) {
        router.push('/finishprofile/info');
      }
    }
  }, [isLoading, userInfo, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-color-secondary">
        <div className="loader"></div>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="flex justify-center items-center h-screen bg-color-secondary">
        <h1 className="text-2xl font-bold text-color-primary">Unauthenticated</h1>
      </div>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
}
// "use client"

// import React from 'react';
// import { useUserInfo } from '../components/sub/UserInfoContext';
// import Image from "next/image";

// export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
//   const { userInfo, isLoading } = useUserInfo();

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-color-secondary">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   if (!userInfo) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-color-secondary">
//         <h1 className="text-2xl font-bold text-color-primary">Unauthenticated</h1>
//       </div>
//     );
//   }

  

//   return (
//     <div>
//       {children}
//     </div>
//   );
// }