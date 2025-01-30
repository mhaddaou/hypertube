"use client"
import { createContext, useContext, useEffect, useState } from "react";

export interface UserInfo {
    created_at: string;
    email: string;
    first_name: string;
    id: string;
    profile_picture_url: string | null;
    last_name: string;
    updated_at: string;
    username: string;
}

interface UserInfoContextType {
    userInfo :UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}


interface UserInfoResponse {
    data: UserInfo;
}

const UserInofContext = createContext<UserInfoContextType | undefined>(undefined);

export const UserInfoProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        created_at: "",
        email: "",
        first_name: "",
        id: "",
        profile_picture_url: null,
        last_name: "",
        updated_at: "",
        username: ""
    });

    useEffect(() => {
        fetch('http://127.0.0.1:8000/users/get_info', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data: UserInfoResponse) => {
                setUserInfo(data.data);
            })
            .catch(error => {
                console.error("Error fetching user info: ", error);
            });
    }, []);

    return(
        <UserInofContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserInofContext.Provider>
    )
}

export const useUserInfo = ()=>{
    const context = useContext(UserInofContext);
    if(context === undefined) {
        throw new Error("useUserInfo must be used within an UserInfoProvider");
    }
    return context;
}