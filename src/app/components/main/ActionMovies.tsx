"use client";

import Image from "next/image";
import React, { useReducer, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

enum ActionTypes {
  inc = "INCREMENT",
  dec = "DECREMENT",
}

interface State {
  selected: number;
}

interface Action {
  type: ActionTypes;
}

function ActionMovies() {
  const [selected, setSelected] = useState(0);
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

  return (
    <section id="ActionMovies" className="w-full relative  text-white pb-5 ">
      <Image
        src="/images/images/backgroundAction.jpeg"
        className="object-cover pt-52"
        fill
        alt="background"
      />

      <div className="w-full  relative pt-10 container">
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
                onClick={() => dispatch({ type: ActionTypes.dec })}
                disabled={!state.selected}
                title="previous"
              >
                <Image
                  src={`/images/icons/${
                    state.selected == 0 ? "switchWhite" : "switchLeftOrange"
                  }.svg`}
                  className="max-w-5 lg:max-w-none"
                  alt="icon"
                  width={23}
                  height={10}
                />
              </button>
            </div>
            <div className="flex gap-1 lg:gap-3 -mt-1.5">
              {items.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`lg:w-2.5 lg:h-2.5 w-2 h-2  rounded-full ${
                      state.selected === index ? "bg-color-primary" : "bg-white"
                    }`}
                  ></div>
                );
              })}
            </div>
            <div>
              <button
                onClick={() => dispatch({ type: ActionTypes.inc })}
                disabled={state.selected == items.length - 1}
                title="Next"
              >
                <Image
                  src={`/images/icons/${
                    state.selected == items.length - 1
                      ? "switchRightWhite"
                      : "switchOrange"
                  }.svg`}
                  alt="icon"
                  className="max-w-5 lg:max-w-none"
                  width={23}
                  height={10}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <div className="flex flex-col md:flex-row flex-wrap w-full gap-5  items-stretch justify-center">
            {data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-[90%]  md:w-[45%] lg:w-[244px]   flex flex-col justify-between  gap-7"
                >
                  <div className=" h-[271px] w-full   relative">
                    <img
                      alt="img"
                      className="w-full h-full rounded-lg lg:rounded-3xl border-[2px] border-color-primary object-cover "
                      src={`${item.large_cover_image}`}
                    />
                  </div>
                  <div className="flex flex-col gap-3 justify-between">
                    <div className="text-ellipsis">
                    <p className="px-1 line-clamp-2 font-lemonada font-bold text-lg">
                      {item.title}{" "}
                    </p>

                    </div>
                    <p className="font-lemonada text-[#B2B5BB] flex gap-5 text-sm">
                      <span>{item.year}</span>
                      {/* <span>{item.time.split(" ")[0]}</span> */}
                      {/* <span>{item.time.split(" ")[1]}</span> */}
                      <span></span>
                    </p>

                    <div className="flex items-center gap-3 bg-[#4F361A] w-fit pr-3 rounded-full font-lemonada ">
                      <Image
                        src="/images/icons/starDoble.svg"
                        alt=""
                        width={23}
                        height={10}
                      />
                      {item.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ActionMovies);
