import { useState } from "react";
import Image from "next/image";
import { HeroFilms } from "@/app/Types/Interfaces/Interfaces";
import { useAppDispatch } from "@/lib/hooks";
import {
  changeBackgroundImage,
  animation,
} from "@/lib/features/background/background";
import { changeHeroData } from "@/lib/features/HeroData/HeroData";

const ImageScroller = ({ images }: { images: HeroFilms[] }) => {
  const [imageList, setImageList] = useState(images);
  const [selectedImageId, setSelectedImageId] = useState(2);
  const dispatch = useAppDispatch();
  const handleImageClick = (id: number) => {
    if (id === selectedImageId) return;
    setSelectedImageId(id);
    const img = imageList.find((item) => id === item.id)?.image;
    const data = imageList.filter((item) => item.id === id);
    dispatch(changeHeroData(data[0]));
    dispatch(changeBackgroundImage(img));
    dispatch(animation(false));
    setTimeout(() => {
      dispatch(animation(true));
    }, 0);

    const index = imageList.findIndex((item) => item.id === selectedImageId);
    if (index !== -1) {
      imageList[index];
    }

    const updatedList = [...imageList];

    // animation for cards films
    if (id !== updatedList[0].id) {
      const removedImage = updatedList.shift();
      if (removedImage) updatedList.push(removedImage);

      const imageListElement = document.querySelector(".imageList");
      if (imageListElement) {
        if (window.innerWidth >= 1024) {
          imageListElement.classList.add("animate-slide");
        } else {
          imageListElement.classList.add("animate-slide1");
        }
        setTimeout(() => {
          if (window.innerWidth >= 1024) {
            imageListElement.classList.remove("animate-slide");
          } else {
            imageListElement.classList.remove("animate-slide1");
          }
          // imageListElement.classList.remove("animate-slide");
          setImageList(updatedList);
        }, 1300);
      }
    }
  };

  return (
    <div className=" whitespace-nowrap relative ">
      <div className="flex transition-transform imageList  relative gap-5 z-50">
        {imageList.map((item, index) => (
          <div
            key={item.id}
            className={`relative w-[200px] h-[300px] md:w-[300px] md:min-w-[300px] max-w-[300px]  md:h-[400px]  inline-block    ${
              item.id === selectedImageId
                ? "scale-110 z-50 transition-all duration-500 ease-in"
                : "cursor-pointer"
            }`}
            onClick={() => handleImageClick(item.id)}
          >
            <div
              className={`absolute w-full h-full flex-1 ${
                item.id === selectedImageId
                  ? "transition-all duration-300 ease-in"
                  : "bg-black/50"
              } z-10 rounded-xl`}
            ></div>
            <Image
              src={item.image}
              alt={`Image ${index}`}
              className="rounded-xl "
              sizes="150px"
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
