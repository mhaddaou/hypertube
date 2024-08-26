"use client";

import HeroSection from "./components/main/HeroSection";
import { PopularMovies } from "./components/main/PopularMovies";



export default function Home() {
  

  return (
    
    <main className="bg-black">
      {/* <div class="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 h-32 overflow-y-scroll">
    <div class="h-64 bg-slate-400"></div>
</div> */}
 
      <HeroSection/>
      <PopularMovies/>
      
     
    </main>
  );
}
