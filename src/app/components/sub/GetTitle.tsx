import { useAppSelector } from "@/lib/hooks";
import React from "react";

interface GetTitleProps {
  title: string;
}

const splitTwoChunks = (title: string): { first: string; second: string } => {
  const middleIndex = Math.floor(title.length / 2);

  const first = title.slice(0, middleIndex).concat("\n");
  const second = title.slice(middleIndex);
  return { first, second };
};

const GetTitle = ({ title }: GetTitleProps) => {
    const titl = useAppSelector((slice) => slice.heroData.title)
  const { first, second } = splitTwoChunks(title);
  return (
    <>
      <p>{titl}</p>
      {/* <p>{second}</p> */}
    </>
  );
};

export default GetTitle;
