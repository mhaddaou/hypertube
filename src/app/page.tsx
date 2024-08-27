"use client";

import HeroSection from "./components/main/HeroSection";
import { PopularMovies } from "./components/main/PopularMovies";



export default function Home() {
  

  return (
    
    <main className="bg-black">
      <HeroSection/>
      <PopularMovies/>
    </main>
  );
}
