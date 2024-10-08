"use client";
import { FC, useEffect } from 'react';
import { fetchMovieData } from '@/lib/features/Movie/Movie';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import Comments from '@/app/components/main/Comments';

interface MovieDetailProps {
  params: {
    id: number;
  };
}

const MovieDetail: FC<MovieDetailProps> = ({ params }) => {
  const { id } = params;
  const dispatch = useAppDispatch();
  const movieData = useAppSelector((state) => state.movieData.movieData);
  const loading = useAppSelector((state) => state.movieData.status);

  useEffect(() => {
    dispatch(fetchMovieData(id));
  }, [dispatch, id]);

  if (loading === "loading") {
    return <div className="w-full h-auto mt-[60px]"> Loading... </div>;
  }

  const description = movieData?.description_intro || '';
  const isDescriptionShort = description.length < 600;

  return (
    <>
      <div className="w-full h-auto relative mt-[60px]">
        <Image
          src={movieData ? movieData?.large_screenshot_image1 : ''}
          alt="movie screenshot"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
        <div className={`flex flex-col justify-between absolute bottom-0 left-0 w-full ${isDescriptionShort ? 'h-1/2' : 'h-2/3'} overflow-y-auto`}>
          <h1 className="text-3xl font-bold text-white px-10 mt-5 font-lemonada text-shadow">
            {movieData?.title}
          </h1>
          <div className="flex items-center px-10 pt-2 text-xs font-medium text-white font-lemonada text-shadow">
            <span>{movieData?.runtime}m&nbsp;</span>
            <span>&nbsp;-&nbsp;</span>
            <span>{movieData?.year}&nbsp;</span>
            <span>&nbsp;-&nbsp;</span>
            <span>{movieData?.genres.join(" - ")}</span>
          </div>
          <p className="text-white px-10 py-5 font-lemonada text-xs text-shadow">
            {movieData?.description_intro || "No summary available"}
          </p>
          <div className="flex gap-8 px-10 pt-5 pb-5 text-xs font-bold font-lemonada">
            <button className="flex gap-3 bg-color-primary text-black rounded-lg px-4 py-3">
              <Image
                src="/images/icons/play.svg"
                alt="play"
                width={20}
                height={20}
              />
              <p className="mt-0.5"> Play now </p>
            </button>
            <button className="flex gap-4 border border-white text-white rounded-lg px-4 py-3 bg-black">
              <Image
                src="/images/icons/bookmark.svg"
                alt="add to watchlist"
                width={20}
                height={20}
              />
              <p className="mt-0.5"> add to watchlist </p>
            </button>
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
};

export default MovieDetail;
