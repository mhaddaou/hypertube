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
    <div className="px-4 md:pl-10 pb-8 bg-background">
      <div className="relative inline-block mb-6">
        <h2 className="text-2xl font-semibold text-color-white font-lemonada">
          Similar Movies for you
        </h2>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-color-primary mt-1"></div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-2 md:space-x-5">
        {suggestions.slice(0, 4).map((movie: MovieSuggestions) => (
          <div 
            key={movie.id} 
            className="cursor-pointer w-[calc(50%-4px)] md:w-[180px] pt-2"
            onClick={() => handleMovieClick(movie.id)}
          >
            <div className="aspect-[2/3] w-full">
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="mt-0.5">
              <h3 className="text-color-white font-medium text-sm truncate">{movie.title}</h3>
              <div className="flex items-center text-xs">
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