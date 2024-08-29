import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function WatchedMovies() {
  return (
    <section className="w-full pb-10   h- relative">
      <Image
        alt="bg-img"
        src="/images/images/backgroundWatched.jpg"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="w-full h-full absolute bg-black/75 "></div>
      <div className="w-full container text-white relative pt-28">
        <div className="w-fit">
          <h1 className="font-lemonada font-bold text-[40px] capitalize text-white">
            watch again
          </h1>
          <div className="w-[51%] h-1 bg-color-primary rounded-full"></div>
        </div>
        <div className="w-full container pt-16 flex  justify-between gap-3 items-center">
          <Image
            src="/images/icons/switchLeftOrange.svg"
            className="w-8 h-10"
            alt=";"
            width={100}
            height={100}
          />

          <div className="flex-1 bg--500 flex gap-6">
            <div className="w-[250px]">
              <motion.img
                className="w-full h-[300px] object-fill rounded-xl"
                src="https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1013_.jpg"
              />
              <p className="font-lemonada text-color-primary text-lg pt-5">
                Rebel Moon - Part One: A Child of Fire
              </p>
            </div>
            <div className="w-[250px]">
              <motion.img
                className="w-full h-[300px] object-fill rounded-xl"
                src="https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1013_.jpg"
              />
              <p className="font-lemonada text-color-primary text-lg pt-5">
                Rebel Moon - Part One: A Child of Fire
              </p>
            </div>
            <div className="w-[250px]">
              <motion.img
                className="w-full h-[300px] object-fill rounded-xl"
                src="https://m.media-amazon.com/images/M/MV5BODRiMTA4NGMtOTQzZC00OWFjLWFmODctMjY2ZTcwYjI5NDMyXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX604_.jpg"
              />
              <p className="font-lemonada text-color-primary text-lg pt-5">
                Rebel Moon - Part One: A Child of Fire
              </p>
            </div>
            <div className="w-[250px]">
              <motion.img
                className="w-full h-[300px] object-fill rounded-xl"
                src="https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1013_.jpg"
              />
              <p className="font-lemonada text-color-primary text-lg pt-5">
                Rebel Moon - Part One: A Child of Fire
              </p>
            </div>
            <div className="w-[250px]">
              <motion.img
                className="w-full h-[300px] object-fill rounded-xl"
                src="https://m.media-amazon.com/images/M/MV5BNjM2N2MyNTYtZTFmMS00NDIwLWE4MGEtNGJmZGM3MjgwNTFkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1013_.jpg"
              />
              <p className="font-lemonada text-color-primary text-lg pt-5">
                Rebel Moon - Part One: A Child of Fire
              </p>
            </div>
          </div>
          <Image
            src="/images/icons/switchOrange.svg"
            className="w-8 h-10 cursor-pointer"
            onClick={() => console.log("next")}
            alt=";"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(WatchedMovies);
