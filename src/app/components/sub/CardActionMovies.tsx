import { ActionMovies } from "@/lib/features/ActionMoviesData/ActionMoviesData";
import Image from "next/image";

interface PropsCard {
  data: ActionMovies;
}

export default function CardsActionMovies({ data }: PropsCard) {
  return (
    <div className="flex flex-col  md:flex-row flex-wrap w-full gap-5   items-stretch justify-center ">
      {data.data.map((item, index) => {
        return (
          <div
            key={index}
            className=" w-[90%]  md:w-[45%] lg:w-[244px] cursor-pointer relative  flex flex-col group justify-between  gap-7"
          >
            <div className=" h-[271px] w-full   relative">
            <div className="absolute w-0 group-hover:w-full group-hover:z-50 h-full top-0 overflow-hidden bg-black/70 group-hover:border z-0 border-color-primary rounded-lg lg:rounded-3xl scale-105 transition-all duration-500 ease-in">
              <div className="w-full h-full flex justify-center flex-col gap-7 items-center px-4 text-ellipsis">
                <p className="line-clamp-5 font-lexend-Deca text-sm font-light text-[#B7AEAE]">
                {item.summary}

                </p>
                <button onClick={() => console.log('clicked', item.id)} className="bg-color-primary text-slate-100 px-4 rounded-md py-2 flex items-center gap-2">
        <Image
          src="/images/icons/display.svg"
          alt="display"
          width={12}
          height={40}
        />
        <span className="-mt-1">watch now</span>
      </button>

              </div>
            </div>
              <img
                alt="img"
                className="w-full h-full rounded-lg lg:rounded-3xl border-[2px] group-hover:scale-105 border-color-primary object-cover "
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
                <span>{item.genres[0]}</span>
                <span>{item.genres[1]}</span>
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
  );
}
