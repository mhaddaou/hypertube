"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { div } from "three/webgpu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedImage } from "@/lib/features/StateImageCover/StateImageCover";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

 const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const dispatch = useAppDispatch();
  const selectedImage = useAppSelector(
    (state) => state.selectedImage.selectedImage
  );
  const handleClick = (card: Card) => {
    dispatch(setSelectedImage({ selectedImage: card.id }));
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    dispatch(setSelectedImage({ selectedImage: -1 }));
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full  mp-10 grid grid-cols-1 md:grid-cols-3   gap-4 relative z-20 ">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            "border border-color-primary rounded-md min-h-[395px] "
          )}
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden ",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute   inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-md h-full w-full b"
                : "bg-white rounded-md h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  const selected = useAppSelector((state) => state.selectedImage.selectedImage);
  return (
    <motion.img /// <reference path="" />
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "  absolute inset-0 h-full w-full  transition duration-200 object-cove ",
        card.id === 1 ? "object-cover" : "",
        selected === card.id ? "object-cover " : ""
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-8 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};


export default React.memo(LayoutGrid);