// import Image from "next/image"
// import { useState } from "react"
// import { EditProfile } from "./EditProfileCard"
// import DeleteProfileCard from "./DeleteProfileCard"

// interface ProfileInfoProps {
//     name :string,
//     username :string,
// }

// interface ButtonProps {
//     type :string,
//     message:string,
//     onclick:()=>void
// }

// const ProfileActionButton: React.FC<ButtonProps> = (props)=>{
//     if (props.type == "primary")
//         return <button className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl" onClick={props.onclick}>{props.message}</button>
//     return <button className="h-12 min-w-40 bg-transparent border-2 border-color-primary text-color-white px-8 rounded-xl" onClick={props.onclick} >{props.message}</button>
// }



// export default function ProfilInfo(props:ProfileInfoProps) {

//     const [isEditProfile, setIsEditProfile] = useState(false);
//     const [isDeleteProfile, setIsDeleteProfile] = useState(false);

//     const onClickPrimary = ()=>{
//         setIsDeleteProfile(true);
//     }
//     const onClickSecondary = ()=>{
//         setIsEditProfile(true);
//     }
//     const closeEditProfile = ()=>{
//         setIsEditProfile(false);
//     }
//     const closeDeleteProfile = ()=>{
//         setIsDeleteProfile(false);
//     }

    

//     return(
//         <>
//         <div className="bg-profile-bg bg-cover bg-center w-full h-1/3 flex items-end font-lemonada">
//             <div className="w-full relative">
//                 <div className="h-40 w-full"></div>
//                 <div className="bg-color-secondary h-40 w-full"></div>
//                 <div className="absolute w-full h-full top-0 flex items-end">
//                     <div className="h-full w-1/5 flex justify-end items-center">
//                         <img className="w-32 h-32 mr-4 rounded-full border-8 border-color-secondary" src="https://st2.depositphotos.com/1023162/8272/i/450/depositphotos_82720548-Beautiful-mystic-woman-profile-with-long-hair-looking.-Black-and.jpg" alt="" />
//                     </div>
//                     <div className="h-40 w-4/5 flex justify-between items-center px-12">
//                         <div className="font-medium	text-lg">
//                             <h2 className="text-color-white">{props.name}</h2>
//                             <h4 className="text-color-primary">{props.username}</h4>
//                         </div>
//                         <div className="flex gap-4 font-light">
//                             <ProfileActionButton type="secondary" message="Edit Profile" onclick={onClickSecondary}/>
//                             <ProfileActionButton type="primary" message="Delete account" onclick={onClickPrimary}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {isEditProfile ? <EditProfile closeEditProfile={closeEditProfile} /> : <></>}
//         {isDeleteProfile ? <DeleteProfileCard closeDeleteProfile={closeDeleteProfile} /> : <></>}
//         </>
//     )
// }

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { EditProfile, EditProfilePic } from "./EditProfileCard";
import DeleteProfileCard from "./DeleteProfileCard";
import { useUserInfo } from "@/app/components/sub/UserInfoContext";

interface ProfileInfoProps {
    name: string;
    username: string;
}

interface ButtonProps {
    type: string;
    message: string;
    onclick: () => void;
}

export interface UserInfo {
    created_at: string;
    email: string;
    first_name: string;
    id: string;
    image_url: string | null;
    last_name: string;
    updated_at: string;
    username: string;
}

// interface UserInfoResponse {
//     data: UserInfo;
// }

const ProfileActionButton: React.FC<ButtonProps> = (props) => {
    if (props.type == "primary")
        return <button className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl" onClick={props.onclick}>{props.message}</button>
    return <button className="h-12 min-w-40 bg-transparent border-2 border-color-primary text-color-white px-8 rounded-xl" onClick={props.onclick} >{props.message}</button>
}

// const UserInfoContext = createContext<UserInfo | null>(null);

// export const useUserInfo = () => useContext(UserInfoContext);

export default function ProfileInfo(props: ProfileInfoProps) {
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [isDeleteProfile, setIsDeleteProfile] = useState(false);


    const {userInfo} = useUserInfo();


    // const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/users/get_info', {
    //         method: 'GET',
    //         credentials: 'include',
    //     })
    //         .then(response => response.json())
    //         .then((data: UserInfoResponse) => {
    //             setUserInfo(data.data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching user info: ", error);
    //         });
    // }, []);

    const onClickPrimary = () => {
        setIsDeleteProfile(true);
    }
    const onClickSecondary = () => {
        setIsEditProfile(true);
    }
    const closeEditProfile = () => {
        setIsEditProfile(false);
    }
    const closeDeleteProfile = () => {
        setIsDeleteProfile(false);
    }

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <>
        {/* <UserInfoContext.Provider value={userInfo}> */}
            <div className="bg-profile-bg bg-cover bg-center w-full h-1/3 flex items-end font-lemonada">
                <div className="w-full relative">
                    <div className="h-40 w-full"></div>
                    <div className="bg-color-secondary h-40 w-full"></div>
                    <div className="absolute w-full h-full top-0 flex items-end">
                        <div className="h-full w-1/5 flex justify-end items-center">
                        <EditProfilePic/>
                        {/* <Image
                            src={userInfo.image_url || "/images/images/defaultprofile.jpg"}
                            alt="search"
                            width={128}
                            height={128}
                            // className="cursor-pointer"
                            className="w-32 h-32 mr-4 rounded-full border-8 border-color-secondary"
                            /> */}
                            {/* <img  src={userInfo.image_url || "https://st2.depositphotos.com/1023162/8272/i/450/depositphotos_82720548-Beautiful-mystic-woman-profile-with-long-hair-looking.-Black-and.jpg"} alt="" /> */}
                        </div>
                        <div className="h-40 w-4/5 flex justify-between items-center px-12">
                            <div className="font-medium text-lg">
                                <h2 className="text-color-white">{userInfo.first_name} {userInfo.last_name}</h2>
                                <p className="text-color-white">@{userInfo.username}</p>
                            </div>
                            <div className="flex gap-4 font-light">
                                <ProfileActionButton type="secondary" message="Edit Profile" onclick={onClickSecondary} />
                                <ProfileActionButton type="primary" message="Delete account" onclick={onClickPrimary} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isEditProfile ? <EditProfile closeEditProfile={closeEditProfile} /> : <></>}
            {isDeleteProfile ? <DeleteProfileCard closeDeleteProfile={closeDeleteProfile} /> : <></>}
        {/* </UserInfoContext.Provider> */}
        </>
    )
}