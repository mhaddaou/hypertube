import { configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./features/background/background";
import HeroDataSlice from "./features/HeroData/HeroData";
import ActionSlice from "./features/ActionData/ActionData";
import StateImageCoverSlice  from "./features/StateImageCover/StateImageCover";
import WatchedMoviesSlice from "./features/WatchedMovies/WatchedMoviesSlice";
import heroDataSlice1 from './features/Hero/hero'

export const makeStore = () => {
  return configureStore({
    reducer: {
      background: BackgroundSlice,
      heroData: HeroDataSlice,
      actionData: ActionSlice,
      selectedImage : StateImageCoverSlice,
      watchedMovies : WatchedMoviesSlice,
      data : heroDataSlice1,
    },
  });
};

// type of store
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
