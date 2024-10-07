"use client";
import Image from "next/image";
import { FC } from "react";

interface EditorPicksProps {
  updateSearchParams: (key: string | number, value: string | number) => void;
  handleSearch: () => void;
  handleToggle: (index: number) => void;
  handleItemClick: (index: string, subItem: string) => void;
  expandedIndex: number | null;
  clickedItems: ({ [key: string]: string | null });
}

const contentMapping: { [key: string]: string[] } = {
  Source: ["YTS"],
  Quality: ["720p", "1080p", "2160p", "3D"],
  "Sort By": ["Title", "Year", "Rating", "Peers", "Seeds", "DownloadCount", "LikeCount", "DateAdded"],
  "Order By": ["Asc", "Desc"],
};

const EditorPicks: FC<EditorPicksProps> = ({
  updateSearchParams,
  handleSearch,
  handleToggle,
  handleItemClick,
  expandedIndex,
  clickedItems
}) => {

  return (
    <div className="max-h-[300px] bg-seal-brown rounded-md pt-3 pb-5 sm:w-full w-[80%] mx-auto overflow-y-auto overflow-x-hidden custom-scrollbar">
      <div className="w-[90%] mx-auto">
        <h2 className="font-lexend-Deca font-medium">Editor Picks</h2>
        <div className=" w-[95%] border-[1.5px] rounded-md border-night-rider mt-4 flex">
          <div className="flex-1 h-full">
            <input
              type="text"
              className="bg-inherit h-full pl-3 w-[97%] outline-none py-2 text-sm placeholder:text-xs placeholder:text-night-rider placeholder:font-medium placeholder:tracking-wide tracking-wider font-lexend-Deca text-slate-300 "
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
  );
}

export default EditorPicks;
