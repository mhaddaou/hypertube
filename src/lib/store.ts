import { configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./features/background/background";
import HeroDataSlice from "./features/HeroData/HeroData";
import ActionSlice from "./features/ActionData/ActionData";
import StateImageCoverSlice  from "./features/StateImageCover/StateImageCover";

export const makeStore = () => {
  return configureStore({
    reducer: {
      background: BackgroundSlice,
      heroData: HeroDataSlice,
      actionData: ActionSlice,
      selectedImage : StateImageCoverSlice
    },
  });
};

// type of store
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
