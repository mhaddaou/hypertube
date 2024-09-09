"use client";
import { FC } from "react";
import Image from "next/image";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";

const movies = [
  {
    id: 0,
    title: "Test1",
    year: 2018,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    genre: "Action Drama",
    rating: 8,
    viewers: "567k",
    country: "ENGLAND",
    duration: "1h 2m",
    imageUrl: "/images/images/spiderman.jpg",
    favorite: true,
  },
  {
    id: 1,
    title: "Test2",
    year: 2008,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    genre: "Fantasy Adventure Drama",
    rating: 10,
    viewers: "20k",
    country: "USA",
    duration: "1h 38m",
    imageUrl: "/images/images/batman.jpg",
    favorite: false,
  },
  {
    id: 2,
    title: "Test3",
    year: 2000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    genre: "Horror",
    rating: 4,
    viewers: "860",
    country: "ITALY",
    duration: "2h 25m",
    imageUrl: "/images/images/1.jpg",
    favorite: false,
  },
];

export default function Search() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [clickedItems, setClickedItems] = useState<{
    [key: string]: string | null;
  }>({});

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleItemClick = (category: string, subItem: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [category]: prev[category] === subItem ? null : subItem,
    }));
  };

  const handleWatchNow = () => {
    console.log("watch now");
  };

  const contentMapping: { [key: string]: string[] } = {
    Quality: ["480p", "720p", "1080p", "4k"],
    Year: ["1980s", "1990s", "2000s", "2010s", "2020s"],
    Rating: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "Order By": ["Name", "Date", "Popularity", "Rating"],
  };

  interface MovieCardProps {
    title: string;
    year: number;
    country: string;
    duration: string;
    viewers: string;
    genre: string;
    rating: number;
    description: string;
    imageUrl: string;
    favorite: boolean;
    index: number;
  }

  const MovieCard: FC<MovieCardProps> = ({
    title,
    year,
    country,
    duration,
    viewers,
    genre,
    rating,
    description,
    imageUrl,
    favorite,
    index,
  }) => {
    const [isFavorite, setIsFavorite] = useState(favorite);
    const handleFavorite = () => {
      setIsFavorite((prev) => !prev);
    };
    return (
      <div
        className={`h-[300px] sm:h-[200px] pt-4 pb-4 flex gap-3 md:gap-10 w-full ${index && "border-t border-[#898989]"}`}
      >
        <div className="w-full sm:w-[20%]">
          <Image
            src={imageUrl}
            width={200}
            height={200}
            alt="movie thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-[97%]">
            <div className="gap-1 flex flex-col">
              <div className="font-lexend-Deca font-medium text-[17px]">
                {title}
              </div>
              <div className="flex flex-col sm:flex-row text-[#898989] flex-wrap">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-sm flex-wrap">
                  <span>{year}</span>
                  <span>{country}</span>
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 pt-5 sm:pt-0">
                  <IoIosEye />
                  <p className="ml-18 text-sm">{viewers} viewers</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 pt-5 pb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Image
                  key={i}
                  src={
                    i < rating / 2
                      ? "/images/icons/yellowStar.svg"
                      : "/images/icons/whiteStar.svg"
                  }
                  width={15}
                  height={15}
                  alt="star"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap w-[98%] justify-between items-center">
            <div className="hidden sm:block w-[70%] text-[10px] font-lexend-Deca text-[#B7AEAE]">
              {description.length > 200
                ? `${description.substring(0, 200)}...`
                : description}
            </div>
            <div
              className={`sm:my-0 my-2 p-2 rounded-md h-fit cursor-pointer ${isFavorite ? "bg-color-primary" : "border border-[#B7AEAE]"}`}
              onClick={() => handleFavorite()}
            >
              <Image
                src={
                  isFavorite
                    ? "/images/icons/bookmarkFill.svg"
                    : "/images/icons/bookmark.svg"
                }
                width={20}
                height={20}
                alt="bookmark"
              />
            </div>
            <div>
              <button
                className="bg-color-primary px-4 py-2 rounded-md font-lexend-Deca text-sm"
                onClick={() => handleWatchNow()}
              >
                Watch Now
              </button>
            </div>
          </div>
          <div className="sm:flex gap-2 flex-wrap hidden">
            {genre.split(" ").map((g, index) => (
              <div
                key={index}
                className="text-xs font-medium border border-color-primary px-2 py-1.5 rounded-lg text-[13px] text-color-primary font-lexend-Deca uppercase"
              >
                {g.trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden w-screen h-screen bg-black pt-24 flex items-start justify-center">
      <div className="w-full container h-full text-white mx-auto px-4">
        <div className="text-white font-lexend-Deca font-medium text-xl">
          Filter Options
        </div>
        <div className="flex w-full pt-10 gap-7 flex-col lg:flex-row">
          <div className="w-full h-full gap-7 flex flex-col md:flex-row lg:flex-col lg:w-[25%]">
            <div className="bg-search rounded-md py-5 sm:w-full w-[80%] mx-auto">
              <div className="w-[90%] mx-auto">
                <h2 className="font-lexend-Deca font-medium">Editor Picks</h2>
                <div className=" w-[95%] border-[1.5px] rounded-md border-[#353535] mt-4 flex">
                  <div className="flex-1 h-full">
                    <input
                      type="text"
                      className="bg-inherit h-full pl-3 w-full outline-none py-2 text-sm placeholder:text-xs placeholder:text-[#353535] placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300 "
                      placeholder="Search Title"
                    />
                  </div>
                  <div className="w-8 flex justify-center items-center">
                    <button onClick={() => { }}>
                      <Image
                        src="/images/icons/search.svg"
                        alt="search icon"
                        width={25}
                        height={25}
                        className="pt-1"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="space-y-7 mt-8 w-[80%] pl-2">
                    {["Quality", "Year", "Rating", "Order By"].map(
                      (item, index) => (
                        <li key={index} className="font-lexend-Deca text-xs">
                          <div
                            className="cursor-pointer"
                            onClick={() => handleToggle(index)}
                          >
                            <span className="mr-1">
                              {expandedIndex === index ? "-" : "+"}
                            </span>
                            <span
                              className={`${expandedIndex === index ? "text-color-primary" : "text-white"}`}
                            >
                              {item}
                            </span>
                          </div>
                          {expandedIndex === index && (
                            <div className="flex gap-5 flex-wrap mt-5">
                              {contentMapping[item].map((subItem, subIndex) => (
                                <div
                                  className={`rounded-md py-1 px-2 font-light text-xs cursor-pointer ${clickedItems[item] === subItem ? "bg-[#FB9722]" : "bg-[#353535]"}`}
                                  key={subIndex}
                                  onClick={() => handleItemClick(item, subItem)}
                                >
                                  {subItem}
                                </div>
                              ))}
                            </div>
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:w-full w-[80%] mx-auto h-full bg-search rounded-md py-7">
              <div className="bg-search rounded-md">
                <div className="w-[90%] mx-auto">
                  <h2 className="font-lexend-Deca font-medium">By Category</h2>
                  <div className="mt-4 flex flex-wrap">
                    {[
                      "Action",
                      "Comedy",
                      "Drama",
                      "Horror",
                      "Romance",
                      "Sci-Fi",
                      "Thriller",
                      "RealityTV",
                      "Anime",
                      "Documentary",
                      "Sports",
                      "Western",
                      "Biography",
                      "Adventure",
                      "War",
                      "Mystery",
                    ].map((category, index) => (
                      <label
                        key={category}
                        className={`text-xs w-1/2 font-lexend-Deca font-light flex items-center ${!index || index == 1 ? " " : "pt-3"}`}
                      >
                        <input
                          type="checkbox"
                          className="appearance-none h-4 w-4 border-[1.5px] border-[#353535] bg-[#131313] rounded-sm mr-2 checked:bg-[#131313] checked:border-[#FB9722] checked:ring-1 checked:ring-[#FB9722] checked:after:content-['✔'] checked:after:text-[#FB9722] checked:after:block checked:after:text-center checked:after:text-[10px]"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-lexend-Deca font-medium bg-[#131313] px-5 py-3 rounded-md">
              Movies
            </h2>
            <div className="flex bg-[#131313] mt-5 h-fit rounded-md flex-col">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  year={movie.year}
                  description={movie.description}
                  genre={movie.genre}
                  rating={movie.rating}
                  viewers={movie.viewers}
                  country={movie.country}
                  duration={movie.duration}
                  imageUrl={movie.imageUrl}
                  favorite={movie.favorite}
                  index={movie.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
