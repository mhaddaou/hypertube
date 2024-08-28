"use client"
import { FC } from "react";
import Image from "next/image";
import { useState } from "react";
import { IoIosEye } from "react-icons/io";

export default function Search (){
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [clickedItems, setClickedItems] = useState<{ [key: string]: string | null }>({});

    const handleToggle = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleItemClick = (category: string, subItem: string) => {
      setClickedItems((prev) => ({
            ...prev,
            [category]: prev[category] === subItem ? null : subItem,
            }));
    };

    const contentMapping: { [key: string]: string[] } = {
          Quality: ['480p', '720p', '1080p', '4k'],
          Year: ['1980s', '1990s', '2000s', '2010s', '2020s'],
          Rating: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          'Order By': ['Name', 'Date', 'Popularity', 'Rating'],
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
}) => {
  return (
    <div className="flex-1">
      <p className="font-lexend-Deca font-medium text-sm bg-[#131313] px-5 py-3 rounded-md">Movies</p>
      <div className="flex bg-[#131313] mt-5 h-full rounded-md">
        <div className="ml-8 h-[200px] w-1/6 mt-4">
          <img
            src={imageUrl}
            width={200}
            height={200}
            alt="movie thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="h-[200px] w-3/6 mt-4 flex flex-col justify-between pl-8">
          <p className="font-lexend-Deca font-medium text-lg">{title}</p>
          <div className="text-[#B7AEAE] flex items-center space-x-8">
            <p>{year}</p>
            <p>{country}</p>
            <p>{duration}</p>
            <div className="flex items-center gap-1">
              <IoIosEye />
              <p className="ml-18">{viewers} viewers</p>
            </div>
          </div>
          <p className="font-lexend-Deca font-light text-sm text-[#B7AEAE]">{description}</p>
          <div className="text-[#FB9722] border-[#FB9722] border rounded-md w-fit px-3 py-1 font-lexend-Deca font-light">
            {genre}
          </div>
        </div>
        <div className="h-[200px] w-1/6 mt-4 flex justify-center items-center">
          <div className="border border-[#B7AEAE] p-2 rounded-md">
            <Image
              src="/images/icons/bookmark.svg"
              width={30}
              height={30}
              alt="bookmark"
            />
          </div>
        </div>
        <div className="mr-8 h-[200px] w-1/6 mt-4">WATCH NOW</div>
      </div>
    </div>
  );
};

    return (
      <div className="w-screen h-screen bg-black pt-24 flex items-start justify-center">
        <div className="w-full max-w-[1200px] h-full text-white mx-auto px-4">
          <div className="text-white font-lexend-Deca font-medium text-xl">Filter Option</div>
          <div className="flex w-full pt-10 gap-7">
            <div className="w-[300px] h-full bg-black space-y-7">
              <div className="bg-search rounded-md py-5">
                <div className="w-[90%] mx-auto">
                  <p className="font-lexend-Deca font-medium text-lg">Editor Picks</p>
                  <div className="w-[90%] border-[1.5px] rounded-md border-[#353535] mx-auto px-5 mt-4 flex gap-4">
                    <input
                      type="text"
                      className="bg-inherit outline-none py-3 flex-1 text-sm placeholder:text-sm placeholder:text-[#353535] placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300"
                      placeholder="Search Title"
                    />
                    <button onClick={() => {}}>
                      <Image
                        src="/images/icons/search.svg"
                        alt="search icon"
                        width={30}
                        height={10}
                        className="pt-1"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <ul className="space-y-7 mt-10 w-[80%] mx-auto">
                    {['Quality', 'Year', 'Rating', 'Order By'].map((item, index) => (
                      <li key={index} className="font-lexend-Deca font-medium text-sm">
                        <div className="cursor-pointer" onClick={() => handleToggle(index)}>
                          <span className="mr-1">{expandedIndex === index ? '-' : '+'}</span>
                          <span
                            className={`${
                              expandedIndex === index ? 'text-color-primary' : 'text-white'
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                        {expandedIndex === index && (
                          <div className="flex gap-5 flex-wrap mt-5">
                            {contentMapping[item].map((subItem, subIndex) => (
                              <div
                                className={`rounded-md py-1 px-2 font-light cursor-pointer ${
                                  clickedItems[item] === subItem ? 'bg-[#FB9722]' : 'bg-[#353535]'
                                }`}
                                key={subIndex}
                                onClick={() => handleItemClick(item, subItem)}
                              >
                                {subItem}
                              </div>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-[300px] h-full bg-black">
                <div className="bg-search rounded-md py-5">
                  <div className="w-[90%] mx-auto">
                    <p className="font-lexend-Deca font-medium text-lg">By Category</p>
                    <div className="mt-4 flex flex-wrap">
                      {[
                        'Action',
                        'Comedy',
                        'Drama',
                        'Horror',
                        'Romance',
                        'Sci-Fi',
                        'Thriller',
                        'RealityTV',
                        'Anime',
                        'Documentary',
                        'Sports',
                        'Western',
                        'Biography',
                        'Adventure',
                        'War',
                        'Mystery',
                      ].map((category, index) => (
                        <label
                          key={category}
                          className={`w-1/2 font-lexend-Deca font-light flex items-center ${
                            !index || index == 1 ? ' ' : 'pt-3'
                          }`}
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

            <MovieCard
              title="Spiderman"
              year={2021}
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              genre="Action"
              rating={4.5}
              viewers="10k"
              country="USA"
              duration="2h 30m"
              imageUrl="/images/images/spiderman.jpg"
            />
          </div>
        </div>
      </div>
    )

}
