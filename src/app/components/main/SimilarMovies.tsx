import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { MovieSuggestions } from '@/lib/features/Movie/Movie';
import { useRouter } from 'next/navigation';

const SimilarMovies = () => {
  const suggestions = useSelector((state: RootState) => state.movie.movieSuggestions);
  const router = useRouter();

  const handleMovieClick = (movieId: number) => {
    router.push(`/movies/${movieId}/`);
  };

  return (
    <div className="w-full h-auto pb-5 sm:px-10 px-5 bg-background">
      <h2 className="text-2xl font-bold text-color-white font-lemonada mb-4 underline decoration-red-600">
        Similar Movies for you
      </h2>
      <div className="flex flex-wrap gap-[15px]">
        {suggestions.slice(0, 4).map((movie: MovieSuggestions) => (
          <div 
            key={movie.id} 
            className="cursor-pointer group w-[200px]"
            onClick={() => handleMovieClick(movie.id)}
          >
            <div className="relative w-full aspect-[2/3]">
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-color-white text-base font-lemonada truncate">{movie.title}</h3>
              <div className="flex items-center text-sm">
                <span className="text-color-primary">★ {movie.rating}</span>
                <span className="text-color-gray mx-1">|</span>
                <span className="text-color-gray truncate">{movie.genres.slice(0, 2).join(' • ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;