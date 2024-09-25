import { configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./features/background/background";
import HeroDataSlice from "./features/HeroData/HeroData";
import ActionSlice from "./features/ActionData/ActionData";
import StateImageCoverSlice from "./features/StateImageCover/StateImageCover";
import WatchedMoviesSlice from "./features/WatchedMovies/WatchedMoviesSlice";
import heroDataSlice1 from "./features/Hero/hero";
import ActionMoviesSlice from "./features/ActionMoviesData/ActionMoviesData";
import SearchedMoviesSlice from "./features/Search/Search";

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
    },
  });
};

// type of store
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
