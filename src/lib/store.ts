import { configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./features/background/background";
import HeroDataSlice from "./features/HeroData/HeroData";
import ActionSlice from "./features/ActionData/ActionData";
import StateImageCoverSlice from "./features/StateImageCover/StateImageCover";
import WatchedMoviesSlice from "./features/WatchedMovies/WatchedMoviesSlice";
import heroDataSlice1 from "./features/Hero/hero";
import ActionMoviesSlice from "./features/ActionMoviesData/ActionMoviesData";
import SearchedMoviesSlice from "./features/Search/Search";
import UserSlice from "./features/User/User";
import MovieSlice from "./features/Movie/Movie";
import commentSlice from "./features/Comments/Comments";

export const makeStore = () => {
  return configureStore({
    reducer: {
      background: BackgroundSlice,
      heroData: HeroDataSlice,
      actionData: ActionSlice,
      selectedImage: StateImageCoverSlice,
      watchedMovies: WatchedMoviesSlice,
      data: heroDataSlice1,
      actionMovies: ActionMoviesSlice,
      searchedMovies: SearchedMoviesSlice,
      userData: UserSlice,
      movieData: MovieSlice,
      comments: commentSlice,
    },
  });
};

// type of store
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
