import { createSlice } from "@reduxjs/toolkit";

interface ActionData {
  img: string;
  title : string;
  year: string;
  time: string;
  rating: number;
}

const initialState: ActionData[] = [
    {
        img : "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY3000_.jpg",
        title: "Kingdom of the Planet of the Apes",
        year : "2024",
        time : "2h 25m",
        rating: 7
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY3000_.jpg",
        title: "Kingdom of the Planet of the Apes",
        year : "2024",
        time : "2h 25m",
        rating: 7
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY3000_.jpg",
        title: "Kingdom of the Planet of the Apes",
        year : "2024",
        time : "2h 25m",
        rating: 7
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY3000_.jpg",
        title: "Kingdom of the Planet of the Apes",
        year : "2024",
        time : "2h 25m",
        rating: 7
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UY3000_.jpg",
        title: "Kingdom of the Planet of the Apes",
        year : "2024",
        time : "2h 25m",
        rating: 7
    }
];

export const ActionSlice = createSlice({
  name: "actionslice",
  initialState,
  reducers: {
    fetchData: (state, payload) => {
      state = payload.payload;
    },
    addData: (state, payload) =>{
        state = [...state, ...payload.payload]
    }
  },
});

export const { fetchData, addData } = ActionSlice.actions;
export default ActionSlice.reducer;
