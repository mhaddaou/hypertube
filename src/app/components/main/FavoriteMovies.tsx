"use client";
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axiosInstance from '@/lib/axios';

interface FavoriteMovie {
  created_at: string;
  movie_id: string;
  movie_imdb_code: string;
  movie_source: string;
  poster_src: string;
  title: string;
  rating: number;
  genres: string[];
}

const FavoriteMovies: FC = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axiosInstance.get('/movies/favorite');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-auto pb-5 sm:px-10 px-5 bg-black">
        <div className="flex flex-wrap gap-[15px]">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="cursor-pointer w-[200px]">
              <div className="w-full aspect-[2/3] bg-background animate-pulse rounded-lg"></div>
              <div className="w-3/4 h-4 bg-background animate-pulse mt-2 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto pb-5 sm:px-10 px-5 bg-black">
      {favorites.length > 0 && (
        <h2 className="text-2xl font-bold text-white font-lemonada mb-4 underline decoration-red-600">Favorite Movies</h2>
      )}
      <div className="flex flex-wrap gap-[15px]">
        {favorites.slice(0, 4).map((movie) => (
          <Link href={`/movies/${movie.movie_id}`} key={movie.movie_id}>
            <div className="cursor-pointer group w-[200px]">
              <div className="relative w-full aspect-[2/3]">
                <Image
                  src={movie.poster_src}
                  alt={movie.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <p className="text-white text-base font-lemonada truncate">{movie.title}</p>
                <div className="flex items-center text-sm">
                  <span className="text-color-primary">★ {Number(movie.rating).toFixed(1)}</span>
                  <span className="text-color-gray mx-1">|</span>
                  <span className="text-color-gray truncate">{movie.genres.slice(0, 2).join(' • ')}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;