import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  id: number;
  title: string;
  year: number;
  genres: string[];
  rating: number;
  description: string;
  imageUrl: string;
  favorite: boolean;
  index: number;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  year,
  genres,
  rating,
  description,
  imageUrl,
  favorite,
  index,
}) => {

  const [isFavorite, setIsFavorite] = useState(favorite);
  const router = useRouter();

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleWatchNow = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className="flex flex-col gap-3 sm:block">
      <div
        className={`pt-4 pb-1 sm:pb-4 flex gap-3 sm:gap-5 w-full ${index && "border-t border-suva-grey"}`}
      >
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt="movie thumbnail"
          className="aspect-auto sm:max-h-[200px] rounded-lg"
        />
        <div className="flex flex-col justify-center sm:justify-between w-full mt-6 sm:m-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-[97%]">
            <div className="text-center sm:text-left sm:pb-6 sm:mx-0 font-medium text-[17px]">
              <span className="font-lexend-Deca">{title} </span>
              <span className="text-suva-grey">{year}</span>
            </div>
            <div className="self-center flex items-center gap-1 pt-5 pb-2">
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
            <div className="sm:hidden flex flex-col gap-2 flex-wrap my-3 w-fit items-center self-center">
              {genres.slice(0, 3).map((g, index) => (
                <div
                  key={index}
                  className="text-xs font-medium border border-color-primary px-2 py-1.5 rounded-lg text-[13px] text-color-primary font-lexend-Deca uppercase"
                >
                  {g}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap w-[98%] justify-center gap-3 sm:justify-between items-center pb-7">
            <div className="hidden sm:block w-[60%] text-[10px] font-lexend-Deca text-pink-swan">
              {
                description
                  ? (description.length > 300 ? `${description.substring(0, 300)}...` : description)
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
            <button
              className="bg-color-primary px-4 py-2 rounded-md font-lexend-Deca text-sm"
              onClick={handleWatchNow}
            >
              Watch Now
            </button>
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
      <div className="sm:hidden w-full text-[10px] font-lexend-Deca text-pink-swan pb-3">
        {
          description
            ? (description.length > 200 ? `${description.substring(0, 200)}...` : description)
            : "(No summary available)"
        }
      </div>
    </div>
  );
};

export default MovieCard;
