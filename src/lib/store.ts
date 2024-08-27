import { configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./features/background/background";
import HeroDataSlice from "./features/HeroData/HeroData";
import ActionSlice from "./features/ActionData/ActionData";

export const makeStore = () => {
  return configureStore({
    reducer: {
      background: BackgroundSlice,
      heroData: HeroDataSlice,
      actionData: ActionSlice,
    },
  });
};

// type of store
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
