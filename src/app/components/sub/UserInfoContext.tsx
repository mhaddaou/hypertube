"use client"
import { createContext, useContext, useEffect, useState } from "react";

export interface UserInfo {
    created_at: string;
    email: string;
    first_name: string;
    id: string;
    image_url: string | null;
    last_name: string;
    updated_at: string;
    username: string;
    profile_is_finished:boolean;
    password_is_set:boolean;
}

interface UserInfoContextType {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    isLoading: boolean;
}

interface UserInfoResponse {
    data: UserInfo;
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined);

export const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        created_at: "",
        email: "",
        first_name: "",
        id: "",
        image_url: null,
        last_name: "",
        updated_at: "",
        username: "",
        profile_is_finished:false,
        password_is_set:false,
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/users/get_info', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then((data: UserInfoResponse) => {
                setUserInfo(data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching user info: ", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo, isLoading }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export const useUserInfo = ()=>{
    const context = useContext(UserInfoContext);
    if(context === undefined) {
        throw new Error("useUserInfo must be used within an UserInfoProvider");
    }
    return context;
}