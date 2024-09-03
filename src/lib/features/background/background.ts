import { createSlice } from "@reduxjs/toolkit";
interface BackgroundState {
  image: string;
  animation : boolean;
  oldImage : string;
}

const initialState: BackgroundState = {
  image : 'https://img.yts.mx/assets/images/movies/national_theatre_live_prima_facie_2022/large-cover.jpg',
  animation : true,
  oldImage : 'https://img.yts.mx/assets/images/movies/national_theatre_live_prima_facie_2022/large-cover.jpg',
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
