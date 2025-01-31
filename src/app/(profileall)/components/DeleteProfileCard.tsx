import React from "react";
import { IoWarning } from "react-icons/io5";
import { PopUpModal } from "./Modale";

const WarningMessage = ()=>{
    return(
        <div className="w-full bg-orange-100 border-l-8 border-orange-600 p-8">
            {/* <div className="margin-"> */}
                <div className="flex gap-4 text-orange-900 font-semibold text-xl">
                    <IoWarning className=""/>
                    <h2 >Warning</h2>
                </div>
                <p className="text-orange-800 " >By Deleteing this account, you won’t be able to access the system.</p>
            {/* </div> */}

        </div>
    )
}

// interface PopUpProps 



export default function DeleteProfileCard ({closeDeleteProfile}:{closeDeleteProfile:()=>void} ){

    // const handleClose = ()=>{
    //     closeDeleteProfile();
    // }

    return(
        // <div className="fixed inset-0 w-full h-full flex flex-col justify-center items-center z-10 font-lemonada ">
        // <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm" onClick={handleClose}></div>
        // <div className="relative bg-color-white p-12 rounded-xl z-10" >
        //     <div className="absolute right-8 top-8 rounded-full bg-gray-100 p-1 cursor-pointer" onClick={handleClose}>
        //         <AiOutlineClose />
        //     </div>
        <PopUpModal closeFunction={closeDeleteProfile}>
            <div className="flex flex-col justify-center items-center gap-8">
                <h2 className="text-xl text-color-secondary font-bold my-2">Delete User</h2>
                <h3 className="text-color-dark-gray">Are you sure you want to delete your Profile</h3>
                <WarningMessage />
            <button className="h-12 min-w-40 bg-color-primary text-color-white px-8 rounded-xl my-2"> Delete Profile </button>
            </div>
        </PopUpModal>
            
    //     </div>

    // </div>
    )
}