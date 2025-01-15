"use client";

import Image from "next/image";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchActionMovies,
  incrementPages,
  decrementPages,
  isSelected,
} from "@/lib/features/ActionMoviesData/ActionMoviesData";
import CardsActionMovies from "../sub/CardActionMovies";
import dynamic from "next/dynamic";
const CardsMovies = dynamic(() => import("../sub/CardActionMovies"), {
  ssr: false,
});

enum ActionTypes {
  inc = "Inc",
  dec = "Dec",
}

interface State {
  selected: number;
}

interface Action {
  type: ActionTypes;
}

function ActionMovies() {
  const [selected, setSelected] = useState(0);
  const [lastSelected, setLastSelected] = useState<ActionTypes>(
    ActionTypes.inc
  );
  const items = Array.from({ length: 4 });

  const dispatchR = useAppDispatch();
  const data = useAppSelector((state) => state.actionMovies);

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ActionTypes.inc:
        return {
          selected:
            state.selected < items.length - 1
              ? state.selected + 1
              : state.selected,
        };
      case ActionTypes.dec:
        return {
          selected: state.selected > 0 ? state.selected - 1 : state.selected,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { selected: 0 });
  const selectedRef = useRef<HTMLDivElement>(null);
  const handlNext = () => {
    dispatchR(isSelected());
    selectedRef.current?.classList.remove(
      `animate-fade-actionMovies${lastSelected}`
    );
    setLastSelected(ActionTypes.inc);
    dispatchR(incrementPages());
  };
  const handlPrevious = () => {
    selectedRef.current?.classList.remove(
      `animate-fade-actionMovies${lastSelected}`
    );
    setLastSelected(ActionTypes.dec);
    dispatchR(isSelected());
    dispatchR(decrementPages());
  };

  useEffect(() => {
    dispatchR(
      fetchActionMovies({ page_size: data.page_size, page: data.page })
    );
  }, [data.page_size, data.page]);

  useEffect(() => {
    if (selectedRef.current) {
      setTimeout(() => {
        console.log(lastSelected, "setTimeout");
        selectedRef.current?.classList.add(
          `${
            lastSelected == ActionTypes.inc
              ? "animate-fade-actionMoviesInc"
              : "animate-fade-actionMoviesDec"
          }`
        );
      }, 150);
    }
  }, [data.selected]);

  return (
    <section
      id="ActionMovies"
      className="w-full relative  text-white pb-5 min-h-[60vh]"
    >
      <Image
        src="/images/images/backgroundAction.jpeg"
        className="object-cover pt-52"
        fill
        alt="background"
      />

      <div className="w-full  relative pt-10 container ">
        <div className="w-full flex justify-between items-center ">
          <div className="w-fit">
            <h1 className="font-lemonada font-bold   lg:text-[40px] capitalize text-white">
              Action Movies
            </h1>
            <div className="w-[47%] h-1 bg-color-primary rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 pt-1.5 ">
            <div className="">
              <button
                type="button"
                onClick={handlPrevious}
                disabled={data.page <= 1}
                title="previous"
              >
                <Image
                  src={`/images/icons/${
                    data.page <= 1 ? "switchWhite" : "switchLeftOrange"
                  }.svg`}
                  className="max-w-5 lg:max-w-none"
                  alt="icon"
                  width={23}
                  height={10}
                />
              </button>
            </div>
            <div className="flex gap-1 lg:gap-3 -mt-1.5 ">
              {items.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`lg:w-2.5 lg:h-2.5 w-2 h-2  rounded-full transition-all duration-500 ease-in ${
                      data.page -1 === index ? "bg-color-primary" : "bg-white"
                    }`}
                  ></div>
                );
              })}
            </div>
            <div>
              <button
                onClick={handlNext}
                disabled={data.page >= 4}
                title="Next"
              >
                <Image
                  src={`/images/icons/${
                    data.page >= 4 
                      ? "switchRightWhite"
                      : "switchOrange"
                  }.svg`}
                  alt="icon"
                  className="max-w-5 lg:max-w-none "
                  width={23}
                  height={10}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-16 animate-fade-actionMoviesInc" ref={selectedRef}>
          <CardsMovies data={data} />
        </div>
      </div>
    </section>
  );
}

export default React.memo(ActionMovies);
