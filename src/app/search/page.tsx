"use client";
import { useState, useEffect, useRef, useCallback, FC } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchSearchedMovies } from "@/lib/features/Search/Search";
import MovieCard from "../components/sub/SearchMovieCard";
import EditorPicks from "../components/sub/EditorPicks";
import ByCategory from "../components/sub/ByCategory";
import MovieCardSkeleton from "../components/sub/MovieCardSkeleton";
import { useSearchParams } from "next/navigation";

interface Movie {
  id: number;
  title: string;
  year: number;
  summary: string;
  genres: string[];
  rating: number;
  large_cover_image: string;
}

interface SearchParams {
  query_term: string;
  quality: string;
  source: string;
  sortBy: string;
  orderBy: string;
  genre: string;
  page: number;
}

const Search: FC = () => {
  const searchParamsFromUrl = useSearchParams();
  const searchQueryFromUrl = searchParamsFromUrl.get("search_query") || "";

  const dispatch = useAppDispatch();
  const movies: Movie[] = useAppSelector((state) => {
    const items = state.searchedMovies.items;
    if (!items) return [];
    const uniqueIds = Array.from(new Set(items.map((movie: Movie) => movie.id)));
    const uniqueMovies = uniqueIds
      .map((id) => items.find((movie: Movie) => movie.id === id))
      .filter((movie) => movie !== undefined) as unknown as Movie[];
    return uniqueMovies;
  });
  const status = useAppSelector((state) => state.searchedMovies.status);
  const hasMore = useAppSelector((state) => state.searchedMovies.hasMore);

  const [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {
    if (searchQueryFromUrl) {
      const params: SearchParams = {
        query_term: searchQueryFromUrl,
        quality: "Q720p",
        source: "YTS",
        sortBy: "",
        orderBy: "",
        genre: "",
        page: 1,
      }
      const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value)
      ) as SearchParams;
      dispatch(fetchSearchedMovies(filteredParams));
    }
  }, [searchQueryFromUrl]);

  const [searchParams, setSearchParams] = useState<SearchParams>({
    query_term: searchQueryFromUrl,
    quality: "",
    source: "YTS",
    sortBy: "",
    orderBy: "",
    genre: "",
    page: 1,
  });

  const updateSearchParams = (key: string | number, value: string | number) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [key]: key === "quality" ? "Q" + value : value,
    }));
  };

  useEffect(() => {
    if (searchParams.query_term) {
      updateSearchParams("page", 1);
    }
  }, [searchParams.query_term]);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [clickedItems, setClickedItems] = useState<{ [key: string]: string | null }>({});

  useEffect(() => {
    if (status === "idle" && searchParams.query_term) {
      const filteredParams = Object.fromEntries(
        Object.entries(searchParams).filter(([_, value]) => value)
      ) as SearchParams;
      dispatch(fetchSearchedMovies(filteredParams));
    }
  }, [status, dispatch]);

  const handleSearch = () => {
    updateSearchParams("page", 1);
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    ) as SearchParams;
    dispatch(fetchSearchedMovies(filteredParams));
  };

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleItemClick = (category: string, subItem: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [category]: prev[category] === subItem ? null : subItem,
    }));
    updateSearchParams(category.toLowerCase().replace(/\s+/g, "_") as keyof SearchParams, subItem);
  };

  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

  const handleCheckboxChange = (index: number | null, category: string) => {
    if (checkedIndex === index) {
      setCheckedIndex(null);
      updateSearchParams("genre", "");
    } else {
      setCheckedIndex(index);
      updateSearchParams("genre", category);
    }
  };

  const getMore = useCallback(() => {
    setLoadingMore(true);
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    ) as SearchParams;
    const newPage = filteredParams.page + 1;
    updateSearchParams("page", newPage);

    dispatch(
      fetchSearchedMovies({
        ...filteredParams,
        page: newPage,
      })
    ).then(() => {
      setLoadingMore(false);
    });
  }, [dispatch, searchParams]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loadingMore) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          getMore();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loadingMore, hasMore, getMore]
  );

  return (
    <div className="overflow-x-hidden w-screen bg-black pt-24 pb-8 flex items-start justify-center">
      <div className="w-full container h-full text-white mx-auto px-4">
        <div className="text-white font-lexend-Deca font-medium text-xl">Filter Options</div>
        <div className="flex w-full pt-10 gap-7 flex-col lg:flex-row">
          <div className="w-full h-full gap-7 flex flex-col md:flex-row lg:flex-col lg:w-[25%] sticky top-4">
            <EditorPicks
              updateSearchParams={updateSearchParams}
              handleSearch={handleSearch}
              handleToggle={handleToggle}
              handleItemClick={handleItemClick}
              expandedIndex={expandedIndex}
              clickedItems={clickedItems}
              query_term={searchParams.query_term}
            />
            <ByCategory checkedIndex={checkedIndex} handleCheckboxChange={handleCheckboxChange} />
          </div>
          <div className="flex-1">
            <h2 className="font-lexend-Deca font-medium bg-seal-brown px-5 py-3 rounded-md">
              Movies
            </h2>
            {status === "loading" && !loadingMore ? (
              Array.from({ length: 5 }).map((_, index) => <MovieCardSkeleton key={index} index={index} />)
            ) : (
              <div className="flex bg-seal-brown mt-5 h-fit rounded-md flex-col max-h-[80vh] overflow-x-hidden overflow-y-auto custom-scrollbar">
                {movies && movies.length > 0 ? (
                  movies.map((movie, index) => {
                    return (
                      <div ref={lastMovieRef} key={movie.id}>
                        <MovieCard
                          id={movie.id}
                          index={index}
                          title={movie.title}
                          year={movie.year}
                          description={movie.summary}
                          genres={movie.genres}
                          rating={movie.rating}
                          imageUrl={movie.large_cover_image}
                          favorite={false}
                        />
                        {index === movies.length - 1 && loadingMore &&
                          Array.from({ length: 5 }).map((_, index) => (
                            <MovieCardSkeleton key={index + 1} index={index + 1} />
                          ))}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-white font-lexend-Deca font-medium text-xl p-5">No results found!</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
