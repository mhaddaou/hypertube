"use client"
import Image from "next/image";
import { useState } from "react";
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

    return (
        <div className="w-screen h-screen bg-black pt-24">
            <div className="container w-full h-full text-white   ">
            <div className="text-white font-lexend-Deca font-medium text-xl">Filter Option</div>
            <div className="flex w-full pt-10 gap-7">
                <div className="w-[360px] h-full bg-black space-y-7">
                    <div className="min-h-[386px] bg-search rounded-md py-5 ">
                        <div className="w-[90%] mx-auto">
                        <div className=" ">
                            <p className="font-lexend-Deca font-medium text-lg">Editor Picks</p>
                        </div>
                        <div className="w-[90%] border-[1.5px] rounded-md border-[#353535]  mx-auto  px-5 mt-4 flex   gap-4">
                            <input type="text" className="bg-inherit outline-none py-3 flex-1  text-sm placeholder:text-sm placeholder:text-[#353535] placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300" placeholder="Search Title" />
                            <button onClick={() => {}}>
                            <Image src='/images/icons/search.svg' alt="search icon" width={30} height={10} className="pt-1"/>
                            </button>
                            </div>
                            </div>
                            <div>
                            <ul className="space-y-7 mt-10 w-[80%] mx-auto">
                            {['Quality', 'Year', 'Rating', 'Order By'].map((item, index) => (
                                  <li key={index} className="font-lexend-Deca font-medium text-sm">
                                  <div className="cursor-pointer" onClick={() => handleToggle(index)}>
                                  <span className="mr-1">{expandedIndex === index ? '-' : '+'}</span>
                                  <span className={`${expandedIndex === index ? 'text-color-primary' : 'text-white'}`}>{item}</span>
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
                     <div className="w-[360px] h-full bg-black">
                       <div className="min-h-[386px] bg-search rounded-md py-5">
                       <div className="w-[90%] mx-auto">
                       <p className="font-lexend-Deca font-medium text-lg">By Category</p>
                       <div className="mt-4 flex flex-wrap space-y-2">
                       {["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller", "RealityTV", "Anime", "Documentary", "Sports", "Western", "Biography", "Adventure", "War", "Mystery"].map((category) => (
                             <label key={category} className="w-1/2 block text-white font-lexend-Deca font-light">
                             <input
                             type="checkbox"
                             className="appearance-none h-4 w-4 border-[1.5px] border-[#353535] bg-[#131313] rounded-sm mr-2 checked:bg-[#131313] checked:border-[#FB9722] checked:ring-1 checked:ring-[#FB9722] checked:after:content-['✔'] checked:after:text-[#FB9722] checked:after:block checked:after:text-center checked:after:text-[10px]"/> 
                             {category}
                             </label>
                        ))}
                     </div>
                       </div>
                       </div>
                     </div>
                </div>

                <div className="flex-1">
                    
                </div>

            </div>
            </div>
        </div>
    )

}
