"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FinishProfileInfo } from "../../components/EditProfileCard";
import { useUserInfo } from '@/app/components/sub/UserInfoContext';

export default function FinishProfile() {
    const { userInfo, isLoading } = useUserInfo();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && userInfo && userInfo.profile_is_finished) {
            router.push('/profile');
        }
    }, [isLoading, userInfo, router]);

    if (isLoading) {
        console.log("LOADING");
        return (
            <div className="flex justify-center items-center h-screen bg-color-secondary">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="bg-color-secondary w-screen h-screen flex justify-center items-center p-12 rounded-xl">
            <FinishProfileInfo />
        </div>
    );
}