"use client"
import { useState } from "react";
import ListMovies from "./components/MoviesList";
import ProfileInfo from "./components/ProfileInfo";



export default function Profile(){
    return(
        <div className="w-full flex flex-col items-center bg-color-secondary">
            <ProfileInfo name="malena Haddaoui" username="@mhaddaou" />
            <ListMovies/>
        </div>
    )
}