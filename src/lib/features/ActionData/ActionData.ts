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
        img : "https://m.media-amazon.com/images/M/MV5BZjI5MzM3NmEtZDk5Zi00YWY4LTgzZmMtZDJjMmNlOTQ1ZTY4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
        title: "Rise of the Planet of the Apes",
        year : "2011",
        time : "1h 45m",
        rating: 7
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BNGZmODU3ZDEtMjQwZC00NTA5LThmNWYtYzk5MmY5ZmM4NGIxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY3000_.jpg",
        title: "Rise of the Planet of the Apes",
        year : "2024",
        time : "2h 25m",
        rating: 7
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BNzM0ZjM2ZTUtNjRkYi00NWI2LWE1MjAtOGE5NzNiMDMyMThjXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX566_.jpg",
        title: "Rise of the Planet of the Apes",
        year : "2024",
        time : "2h 6m",
        rating: 6.9
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BNjJiM2Y0NmItYzEzZS00NDZhLTllYmQtOTg3OGRhMmNiY2UxXkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg",
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
