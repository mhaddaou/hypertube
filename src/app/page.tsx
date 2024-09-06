"use client";

import { useAppDispatch } from "@/lib/hooks";
import ActionMovies from "./components/main/ActionMovies";
import FooterCover from "./components/main/FooterCover";
import HeroSection from "./components/main/HeroSection";
import PopularMovies  from "./components/main/PopularMovies";
import WatchedMovies from "./components/main/WatchedMovies";
import { fetchHeroData } from "@/lib/features/Hero/hero";
import { useEffect } from "react";
import { fetchActionMovies } from "@/lib/features/ActionMoviesData/ActionMoviesData";


export default function Home() {
  
  const dispatch = useAppDispatch();
  useEffect(() => {

    dispatch(fetchHeroData());
    dispatch(fetchActionMovies({page_size: 10, page: 1}));
  }, [dispatch])
  return (
    
    <main className="bg-black overflow-x-hidden">
      
      <HeroSection/>
      <PopularMovies/>
      <ActionMovies/>
      <WatchedMovies/>
      <FooterCover/>
    </main>
  );
}
