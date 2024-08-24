import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import Image from "../../../../public/images/images/1.jpg";
interface BackgroundState {
  image: StaticImageData;
  animation : boolean;
  oldImage : StaticImageData;
}

const initialState: BackgroundState = {
  image: Image,
  animation : true,
  oldImage : Image,
};

export const BackgroundSlice = createSlice({
  name: "Background",
  initialState,
  reducers: {
    changeBackgroundImage: (state, action) => {
      state.oldImage = state.image;
      state.image = action.payload;
    },
    animation: (state, action) => {
        state.animation = action.payload;
    }

  },
});

export const { changeBackgroundImage, animation } = BackgroundSlice.actions;
export default BackgroundSlice.reducer;
