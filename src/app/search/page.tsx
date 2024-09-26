"use client";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { IoIosEye } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchSearchedMovies } from "@/lib/features/Search/Search";

interface Movie {
  id: number;
  title: string;
  year: number;
  summary: string;
  genres: string[];
  rating: number;
  large_cover_image: string;
}

interface MovieCardProps {
  title: string;
  year: number;
  country: string;
  duration: string;
  viewers: string;
  genres: string[];
  rating: number;
  description: string;
  imageUrl: string;
  favorite: boolean;
  index: number;
}

interface SearchParams {
  query_term: string;
  quality: string;
  source: string;
  sortBy: string;
  orderBy: string;
  genre: string;
}

const categories = [
  "Action", "Comedy", "Drama", "Horror", "Romance", "SciFi", "Thriller", "RealityTV",
  "Anime", "Documentary", "Sport", "Western", "Biography", "Adventure", "War",
  "Mystery", "Crime", "Fantasy", "Animation", "History", "Family", "Musical",
  "Music", "FilmNoir", "News", "GameShow", "TalkShow"
];

const contentMapping: { [key: string]: string[] } = {
  Source: ["YTS"],
  Quality: ["720p", "1080p", "2160p", "3D"],
  "Sort By": ["Title", "Year", "Rating", "Peers", "Seeds", "DownloadCount", "LikeCount", "DateAdded"],
  "Order By": ["Asc", "Desc"],
};

const MovieCard: FC<MovieCardProps> = ({
  title,
  year,
  country,
  duration,
  viewers,
  genres,
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

  const handleWatchNow = () => {
    console.log("watch now");
  };

  return (
    <div className="flex flex-col gap-3 sm:block">
      <div
        className={`h-[300px] sm:h-[200px] pt-4 pb-1 sm:pb-4 flex gap-3 sm:gap-5 w-full ${index && "border-t border-suva-grey"}`}
      >
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt="movie thumbnail"
          className="w-full sm:w-[20%] h-full object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-[97%]">
            <div className="gap-1 flex flex-col">
              <div className="font-lexend-Deca font-medium text-[17px]">
                {title}
              </div>
              <div className="flex flex-col sm:flex-row text-suva-grey flex-wrap sm:gap-20">
                <div className="pt-3 sm:pt-2 flex flex-col sm:flex-row gap-3 sm:gap-5 text-sm flex-wrap">
                  <span>{year}</span>
                  <span>{country}</span>
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 pt-5 sm:pt-2">
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
            <div className="hidden sm:block w-[70%] text-[10px] font-lexend-Deca text-pink-swan">
              {
                description
                  ? (description.length > 200 ? `${description.substring(0, 200)}...` : description)
                  : "( No summary available )"
              }
            </div>
            <div
              className={`sm:my-0 my-2 p-2 rounded-md h-fit cursor-pointer ${isFavorite ? "bg-color-primary" : "border border-pink-swan"}`}
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
            {genres.slice(0, 5).map((g, index) => (
              <div
                key={index}
                className="text-xs font-medium border border-color-primary px-2 py-1.5 rounded-lg text-[13px] text-color-primary font-lexend-Deca uppercase"
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full text-[10px] font-lexend-Deca text-pink-swan">
        {
          description
            ? (description.length > 200 ? `${description.substring(0, 200)}...` : description)
            : "(No summary available)"
        }
      </div>
      <div className="sm:hidden flex gap-2 flex-wrap mb-4">
        {genres.slice(0, 5).map((g, index) => (
          <div
            key={index}
            className="text-xs font-medium border border-color-primary px-2 py-1.5 rounded-lg text-[13px] text-color-primary font-lexend-Deca uppercase"
          >
            {g}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Search() {
  const dispatch = useAppDispatch();
  const movies: Movie[] = useAppSelector((state) => {
    const items = state.searchedMovies.items;
    const uniqueIds = Array.from(new Set(items.map((movie: Movie) => movie.id)));
    const uniqueMovies = uniqueIds.map(id => items.find((movie: Movie) => movie.id === id)).filter(movie => movie !== undefined) as Movie[];
    return uniqueMovies;
  });
  const status = useAppSelector((state) => state.searchedMovies.status);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query_term: '',
    quality: '',
    source: 'YTS',
    sortBy: '',
    orderBy: '',
    genre: ''
  });
  const updateSearchParams = (key: keyof SearchParams, value: string) => {
    setSearchParams(prevState => ({
      ...prevState,
      [key]: key === "quality" ? "Q" + value : value
    }));
  };
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [clickedItems, setClickedItems] = useState<{
    [key: string]: string | null;
  }>({});

  useEffect(() => {
    if (status === "idle" && searchParams.query_term) {
      const filteredParams = Object.fromEntries(
        Object.entries(searchParams).filter(([_, value]) => value)
      ) as SearchParams;
      dispatch(fetchSearchedMovies(filteredParams));
    }
  }, [status, dispatch])

  const handleSearch = () => {
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    ) as SearchParams;
    dispatch(fetchSearchedMovies(filteredParams));
  };

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleItemClick = (category: string, subItem: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [category]: prev[category] === subItem ? null : subItem,
    }));
    updateSearchParams(category.toLowerCase().replace(/\s+/g, '_') as keyof SearchParams, subItem);
  };

  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const handleCheckboxChange = (index: number | null, category: string) => {
    setCheckedIndex(index);
    updateSearchParams('genre', category);
  };

  return (
    <div className="overflow-x-hidden w-screen bg-black pt-24 pb-8 flex items-start justify-center">
      <div className="w-full container h-full text-white mx-auto px-4">
        <div className="text-white font-lexend-Deca font-medium text-xl">
          Filter Options
        </div>
        <div className="flex w-full pt-10 gap-7 flex-col lg:flex-row">
          <div className="w-full h-full gap-7 flex flex-col md:flex-row lg:flex-col lg:w-[25%]">
            <div className="bg-seal-brown rounded-md py-5 sm:w-full w-[80%] mx-auto">
              <div className="w-[90%] mx-auto">
                <h2 className="font-lexend-Deca font-medium">Editor Picks</h2>
                <div className=" w-[95%] border-[1.5px] rounded-md border-night-rider mt-4 flex">
                  <div className="flex-1 h-full">
                    <input
                      type="text"
                      className="bg-inherit h-full pl-3 w-full outline-none py-2 text-sm placeholder:text-xs placeholder:text-night-rider placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300 "
                      placeholder="Search Title"
                      onChange={(e) => updateSearchParams("query_term", e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                  <button onClick={handleSearch}>
                    <Image
                      src="/images/icons/search.svg"
                      alt="search icon"
                      width={25}
                      height={25}
                      className="pt-1 w-8 flex justify-center items-center"
                    />
                  </button>
                </div>
                <div>
                  <ul className="space-y-7 mt-8 w-full pl-2">
                    {["Source", "Quality", "Sort By", "Order By"].map(
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
                                  className={`rounded-md py-1 px-2 font-light text-xs cursor-pointer ${clickedItems[item] === subItem ? "bg-color-primary" : "bg-night-rider"}`}
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
            <div className="sm:w-full w-[80%] mx-auto h-full bg-seal-brown rounded-md py-7">
              <div className="bg-seal-brown rounded-md">
                <div className="w-[90%] mx-auto">
                  <h2 className="font-lexend-Deca font-medium">By Category</h2>
                  <div className="mt-4 flex flex-wrap">
                    {categories.map((category, index) => (

                      <label
                        key={category}
                        className={`text-xs w-1/2 font-lexend-Deca font-light flex items-center ${!index || index === 1 ? " " : "pt-3"}`}
                      >
                        <input
                          type="checkbox"
                          className="appearance-none h-4 w-4 border-[1.5px] border-night-rider bg-seal-brown rounded-sm mr-2 checked:bg-seal-brown checked:border-color-primary checked:ring-1 checked:ring-color-primary checked:after:content-['✔'] checked:after:text-color-primary checked:after:block checked:after:text-center checked:after:text-[10px]"
                          checked={checkedIndex === index}
                          onChange={() => handleCheckboxChange(index, category)}
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
            <h2 className="font-lexend-Deca font-medium bg-seal-brown px-5 py-3 rounded-md">
              Movies
            </h2>
            {
              status === "loading" ? (
                <div className="text-white font-lexend-Deca font-medium text-l p-5">
                  Loading...
                </div>
              ) : (
                <div className="flex bg-seal-brown mt-5 h-fit rounded-md flex-col">
                  {movies && movies.length > 0 ? (
                    movies.map((movie, index) => (
                      <MovieCard
                        key={movie.id}
                        index={index}
                        title={movie.title}
                        year={movie.year}
                        description={movie.summary}
                        genres={movie.genres}
                        rating={movie.rating}
                        imageUrl={movie.large_cover_image}
                        viewers="10k"
                        country="USA"
                        duration="1h 38m"
                        favorite={false}
                      />
                    ))
                  ) : (
                    <div className="text-white font-lexend-Deca font-medium text-xl p-5">
                      No results found!
                    </div>
                  )}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
