import Image from "next/image";

interface GetStarsProps {
  rating: number;
}

export default function ({ rating }: GetStarsProps) {
  const elements = Array.from({ length: 5 });
  return (
    <div className="flex gap-5">
      {elements.map((_, index) => {
        return index < rating ? (
          <Image key={index}
            src="./images/icons/yellowStar.svg"
            width={35}
            className="w-[25px] lg:w-[35px]"
            height={10}
            alt="star"
          />
        ) : (
          <Image key={index}
            src="./images/icons/whiteStar.svg"
            className="w-[25px] lg:w-[35px]"
            width={35}
            height={10}
            alt="star"
          />
        );
      })}
    </div>
  );
}
