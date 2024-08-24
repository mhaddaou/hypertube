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
          <Image
            src="./images/icons/yellowStar.svg"
            width={35}
            height={10}
            alt="star"
          />
        ) : (
          <Image
            src="./images/icons/whiteStar.svg"
            width={35}
            height={10}
            alt="star"
          />
        );
      })}
    </div>
  );
}
