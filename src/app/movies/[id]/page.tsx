"use client";
import { FC, useEffect, useState } from 'react';
import { fetchMovieData } from '@/lib/features/Movie/Movie';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import Comments from '@/app/components/main/Comments';
import SimilarMovies from '@/app/components/main/SimilarMovies';
import axiosInstance from '@/lib/axios';
import FavoriteMovies from '@/app/components/main/FavoriteMovies';

interface MovieDetailProps {
  params: {
    id: number;
  };
  searchParams?: {
    source?: string;
  };
}

const MovieDetail: FC<MovieDetailProps> = ({ params, searchParams }) => {
  const { id } = params;
  const source = searchParams?.source;
  const dispatch = useAppDispatch();
  const movieData = useAppSelector((state) => state.movieData.movieData);
  const loading = useAppSelector((state) => state.movieData.status);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleFavorite = async () => {
    try {
      if (!isFavorite) {
        await axiosInstance.post('/movies/favorite', {
          movie_id: movieData?.id.toString(),
          title: movieData?.title,
          movie_imdb_code: '',
          movie_source: movieData?.source || 'YTS',
          poster_src: movieData?.large_cover_image || '',
          rating: (movieData?.rating || 0).toString(),
          genres: movieData?.genres || []
        });
      } else {
        await axiosInstance.delete(`/movies/favorite`, {
          data: {
            movie_id: movieData?.id.toString(),
          }
        });
      }
      setIsFavorite(prev => !prev);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const response = await axiosInstance.get('/movies/favorite');
        const favorites = response.data;
        setIsFavorite(favorites.some((fav: any) => fav.movie_id === id.toString()));
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };

    if (id) {
      checkFavoriteStatus();
    }
  }, [id]);

  useEffect(() => {
    dispatch(fetchMovieData({ id, source }));
  }, [dispatch, id, source]);

  if (loading === "loading") {
    return (
      <div className="bg-black">
        <div className="w-full h-[500px] mt-[60px] bg-gray-600 animate-pulse"></div>
        <div className={"flex flex-col gap-8 px-10 py-5"}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
            </div>
            <div className="w-full h-3 bg-gray-600 rounded animate-pulse"></div>
            <div className="w-3/4 h-3 bg-gray-600 rounded animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
            </div>
            <div className="w-full h-3 bg-gray-600 rounded animate-pulse"></div>
            <div className="w-3/4 h-3 bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="w-full h-auto pb-5 sm:px-10 px-5">
          <div className="flex flex-wrap w-full h-auto mt-5">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="cursor-pointer pb-5">
                <div className="w-[150px] h-[200px] bg-gray-600 animate-pulse rounded-lg mx-2 my-1"></div>
                <div className="w-[150px] h-4 bg-gray-600 animate-pulse mx-2 my-1"></div>
                <div className="flex mx-2 flex-wrap">
                  <div className="w-12 h-4 bg-gray-600 animate-pulse"></div>
                  <div className="flex gap-1 mx-1">
                    <div className="w-16 h-4 bg-gray-600 animate-pulse text-gray-400 text-xs"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const description = movieData?.description_intro || '';
  const isDescriptionLong = description.length > 400;
  const displayedDescription = !isExpanded && isDescriptionLong
    ? `${description.substring(0, 397)}...` 
    : description;

  return (
    <>
      <div className="w-full h-auto relative mt-[60px]">
        {movieData && movieData?.large_screenshot_image1 && <Image
          src={movieData?.large_screenshot_image1}
          alt="movie screenshot"
          width={1920}
          height={1080}
          className="w-full h-[400px] object-cover object-center"
        />
        }
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent">
          <div className="flex flex-col gap-5 px-10 py-5">
            <h1 className="text-3xl font-bold text-white font-lemonada text-shadow">
              {movieData?.title}
            </h1>
            <div className="flex items-center flex-wrap text-xs font-medium sm:text-white text-gray-400 font-lemonada text-shadow font-thin">
              <span>{movieData?.runtime}m&nbsp;</span>
              <span>&nbsp;-&nbsp;</span>
              <span>{movieData?.year}&nbsp;</span>
              {
                movieData?.genres && movieData?.genres.length > 0 && movieData?.genres.map((genre) => (
                  <div key={genre}>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{genre}</span>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col">
              <p className="text-white font-lemonada text-xs text-shadow font-thin">
                {displayedDescription || "No summary available"}
                {isDescriptionLong && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-color-primary hover:underline ml-1 inline"
                  >
                    {isExpanded ? ' Show less' : ' Read more'}
                  </button>
                )}
              </p>
            </div>
            <div className="flex gap-8 text-xs font-bold font-lemonada">
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
                <p onClick={handleFavorite} className="mt-0.5 hidden sm:block"> {isFavorite ? "Remove from watchlist" : "add to watchlist"} </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comments movieId={id} source={movieData?.source || 'YTS'} />
      <SimilarMovies />
      <FavoriteMovies />
    </>
  );
};

export default MovieDetail;
