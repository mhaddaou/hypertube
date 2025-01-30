'use client'
import { useState } from "react";
import { FaBookmark } from "react-icons/fa6";

interface MovieInfosProps {
    name :string,
    image :string,

}
export default function MovieCard({name, image}:MovieInfosProps){

    const [bookmark, setBookmark] = useState(false);

    const handleBookmark = ()=>{
        console.log("book mark, send request to server");
        setBookmark(!bookmark);
    }
    return(
        <div className="flex flex-col justify-between w-60 2xl:w-64 gap-4">
            <div className="relative">
                <img className="rounded-xl h-64 2xl:h-72 w-60 2xl:w-64" src={image} alt="" />
                {bookmark? <FaBookmark  onClick={handleBookmark} className="absolute m-5 right-0 bottom-0 text-color-primary cursor-pointer" /> : <FaBookmark  onClick={handleBookmark} className="absolute m-5 right-0 bottom-0 text-color-gray cursor-pointer" />}
            </div>
            <h3 className="font-lemonada text-color-primary font-bold ">{name}</h3>
        </div>
    )
}