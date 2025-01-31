"use client"
// import { MdModeEditOutline } from "react-icons/md"
// import { PopUpModal } from "./Modale"
// import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
// import { UserInfo, useUserInfo } from "./ProfileInfo"

// const ProfileFormInput = ({name, d}:{name:string, d:string}) => {

//     const setProfileData = useContext(ProfileContext)
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (setProfileData) {
//             setProfileData(prev => ({ ...prev, [name]: e.target.value }));
//         }
//     }

//     return(
//         <div className="flex flex-col my-6">
//             <div className="flex items-center">
//                 <span className="border-1 border-color-dark-gray w-4"></span>
//                 <label className="text-color-dark-gray mx-2" htmlFor="">{name}</label>
//                 <span className="border-1 border-color-dark-gray w-full"></span>
//             </div>
//             <input className="h-12 w-full ml-2" type="text" defaultValue={d} onChange={handleChange} />
//             {/* <span className="border-2 border-color-gray w-full"></span> */}
//         </div>
//     )
// }

// const EditProfilePic = ()=>{
//     return(
//         <div className="relative w-20 h-20">
//             <img src="https://s3-alpha-sig.figma.com/img/86f6/5550/6002f38b868fe510e6b42849dd283513?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4ife4o2Sawdsi~kYS4wxeKK4iorNPw8O5doMQJHH9fV6aj34HyId6ak1RezaFw5SU5xUNLM02C4Qy3nLrr8jJtzzEbRVOrOdXKmcnr5JCLW-j5E4y6JfO2wkrBN5BhgghSWE~A~V17hQO5KsvHRagtn9J0~t8AbtGf5-S1AHx9E9flv-Gz0FDZBI74wmiC0CvWHIF9nvJBpT613KJ4Xg9lPPitaRDIiMa14dbr12SwoqzpUn-E8vP-py3YcddQi4II7Ct78ZtXVUyetfmm~VM53x8XDao5CdpZtJPX894jo9rsvjWtLWMlCelXvePqAN90uNJ7AOVm0UFOcYMVsSQ__" alt="" className="rounded-full"/>
//             <div className="bg-color-white absolute rounded-full right-0 bottom-0 cursor-pointer p-1 shadow-md" >
//                 <MdModeEditOutline  />
//             </div>
//         </div>
//     )
// }

// const ProfileCardInfo = () =>{
//     return(
//         <div className="flex gap-4 items-center mb-5">
//             <EditProfilePic />
//             <div>
//                 <h2 className="">malena Haddaoui</h2>
//                 <h3 className="text-color-dark-gray font-light">mhaddaou@gmail.com</h3>
//             </div>
//         </div>
//     )
// }

// interface ProfileData {
//     firstname:string,
//     lastname:string,
//     username:string,
//     email:string,
// }

// const ProfileContext = createContext<Dispatch<SetStateAction<UserInfo>> | null>(null);

// export const EditProfile = ({closeEditProfile}:{closeEditProfile:()=>void}) => {

//     const userInfo = useUserInfo() as UserInfo;
//     const [profileData, setProfileData] = useState<UserInfo>(userInfo);

//     console.log(profileData);


//     return (
//             <PopUpModal closeFunction={closeEditProfile}>

//                 <ProfileCardInfo />
//                 <form action="" className=" opacity-100 bg-transparent relative w-larg ">
//                     <ProfileContext.Provider value={setProfileData}>
//                         <ProfileFormInput name="first_name" d={userInfo.first_name} />
//                         <ProfileFormInput name="last_name" d={userInfo.last_name}/>
//                         <ProfileFormInput name="email" d={userInfo.email} />
//                         <ProfileFormInput name="username" d={userInfo.username} />
//                     </ProfileContext.Provider>
//                 </form>
//                 <button className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl"> Save Changes </button>
//             </PopUpModal>
//     );
// }

import { MdModeEditOutline } from "react-icons/md"
import { PopUpModal } from "./Modale"
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { UserInfo} from "./ProfileInfo"
import { useUserInfo } from "@/app/components/sub/UserInfoContext"

interface ProfileData {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
}

interface ProfileFormInputProps {
    name: string;
    d: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// const ProfileFormInput: React.FC<ProfileFormInputProps> = ({ name, d, onChange }) => {
//     return (
//         <div className="mb-4">
//             <label htmlFor={name} className="block text-sm font-medium text-gray-700">
//                 {name.charAt(0).toUpperCase() + name.slice(1)}
//             </label>
//             <input
//                 type="text"
//                 id={name}
//                 name={name}
//                 value={d}
//                 onChange={onChange}
//                 className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                 required
//             />
//         </div>
//     );
// };
const ProfileFormInput = ({ name, d }: { name: string, d: string }) => {
    const setProfileData = useContext(ProfileContext)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setProfileData) {
            setProfileData(prev => ({ ...prev, [name]: e.target.value }));
        }
    }

    return (
        <div className="flex flex-col my-6">
            <div className="flex items-center">
                <span className="border-1 border-color-dark-gray w-4"></span>
                <label className="text-color-dark-gray mx-2" htmlFor="">{name}</label>
                <span className="border-1 border-color-dark-gray w-full"></span>
            </div>
            <input className="h-12 w-full ml-2" type="text" value={d} onChange={handleChange} />
        </div>
    )
}

const EditProfilePic = () => {
    return (
        <div className="relative w-20 h-20">
            <img src="https://s3-alpha-sig.figma.com/img/86f6/5550/6002f38b868fe510e6b42849dd283513?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y4ife4o2Sawdsi~kYS4wxeKK4iorNPw8O5doMQJHH9fV6aj34HyId6ak1RezaFw5SU5xUNLM02C4Qy3nLrr8jJtzzEbRVOrOdXKmcnr5JCLW-j5E4y6JfO2wkrBN5BhgghSWE~A~V17hQO5KsvHRagtn9J0~t8AbtGf5-S1AHx9E9flv-Gz0FDZBI74wmiC0CvWHIF9nvJBpT613KJ4Xg9lPPitaRDIiMa14dbr12SwoqzpUn-E8vP-py3YcddQi4II7Ct78ZtXVUyetfmm~VM53x8XDao5CdpZtJPX894jo9rsvjWtLWMlCelXvePqAN90uNJ7AOVm0UFOcYMVsSQ__" alt="" className="rounded-full" />
            <div className="bg-color-white absolute rounded-full right-0 bottom-0 cursor-pointer p-1 shadow-md" >
                <MdModeEditOutline />
            </div>
        </div>
    )
}

const ProfileCardInfo = () => {
    return (
        <div className="flex gap-4 items-center mb-5">
            <EditProfilePic />
            <div>
                <h2 className="">malena Haddaoui</h2>
                <h3 className="text-color-dark-gray font-light">mhaddaou@gmail.com</h3>
            </div>
        </div>
    )
}

const ProfileContext = createContext<Dispatch<SetStateAction<UserInfo>> | null>(null);

export const EditProfile = ({ closeEditProfile }: { closeEditProfile: () => void }) => {

    // const userInfo = useUserInfo() as UserInfo;
    const {userInfo, setUserInfo} = useUserInfo()
    const [profileData, setProfileData] = useState<UserInfo>(userInfo);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/users/update', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
                credentials: 'include',
            });
        
            const data = await response.json();
        
            if (response.ok) {
                setUserInfo(data.data);
                console.log('Profile updated successfully');
                closeEditProfile();
            } else {
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <PopUpModal closeFunction={closeEditProfile}>
            <ProfileCardInfo />
            <form action="" className="opacity-100 bg-transparent relative w-larg" onSubmit={handleSubmit}>
                <ProfileContext.Provider value={setProfileData}>
                    <ProfileFormInput name="first_name" d={userInfo.first_name} />
                    <ProfileFormInput name="last_name" d={userInfo.last_name} />
                    <ProfileFormInput name="email" d={userInfo.email} />
                    <ProfileFormInput name="username" d={userInfo.username} />
                </ProfileContext.Provider>
                <button type="submit" className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl"> Save Changes </button>
            </form>
        </PopUpModal>
    );
}

export const FinishProfileInfo = () => {

    // const userInfo = useUserInfo() as UserInfo;
    const {userInfo, setUserInfo} = useUserInfo()
    const [profileData, setProfileData] = useState<UserInfo>(userInfo);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/users/update', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
                credentials: 'include',
            });
        
            const data = await response.json();
        
            if (response.ok) {
                setUserInfo(data.data);
                console.log('Profile updated successfully');
                // closeEditProfile();
            } else {
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-color-white p-5">
            <ProfileCardInfo />
            <form action="" className="opacity-100 bg-transparent relative w-larg" onSubmit={handleSubmit}>
                <ProfileContext.Provider value={setProfileData}>
                    <ProfileFormInput name="first_name" d={userInfo.first_name} />
                    <ProfileFormInput name="last_name" d={userInfo.last_name} />
                    <ProfileFormInput name="email" d={userInfo.email} />
                    <ProfileFormInput name="username" d={userInfo.username} />
                </ProfileContext.Provider>
                <button type="submit" className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl"> Save </button>
            </form>
        </div>
    );
}

// export const FinishProfileInfo = () => {
//     const { userInfo, setUserInfo } = useUserInfo();
//     const [profileData, setProfileData] = useState<UserInfo>(userInfo);

//     useEffect(() => {
//         setProfileData(userInfo);
//     }, [userInfo]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setProfileData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://127.0.0.1:8000/users/update', {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(profileData),
//                 credentials: 'include',
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setUserInfo(data.data);
//                 console.log('Profile updated successfully');
//                 // closeEditProfile();
//             } else {
//                 console.error('Failed to update profile');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="bg-color-white p-5">
//             <ProfileCardInfo />
//             <form action="" className="opacity-100 bg-transparent relative w-larg" onSubmit={handleSubmit}>
//                 <ProfileContext.Provider value={setProfileData}>
//                     <ProfileFormInput name="first_name" d={profileData.first_name} onChange={handleChange} />
//                     <ProfileFormInput name="last_name" d={profileData.last_name} onChange={handleChange} />
//                     <ProfileFormInput name="email" d={profileData.email} onChange={handleChange} />
//                     <ProfileFormInput name="username" d={profileData.username} onChange={handleChange} />
//                 </ProfileContext.Provider>
//                 <button type="submit" className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl"> Save </button>
//             </form>
//         </div>
//     );
// };