"use client";

import ActionMovies from "./components/main/ActionMovies";
import FooterCover from "./components/main/FooterCover";
import HeroSection from "./components/main/HeroSection";
import { PopularMovies } from "./components/main/PopularMovies";
import WatchedMovies from "./components/main/WatchedMovies";



export default function Home() {
  

  return (
    
    <main className="bg-black">
      <HeroSection/>
      <PopularMovies/>
      <ActionMovies/>
      <WatchedMovies/>
      <FooterCover/>
    </main>
  );
}
