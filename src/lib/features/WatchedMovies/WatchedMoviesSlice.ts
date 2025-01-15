import { createSlice } from "@reduxjs/toolkit";

interface WatchedMoviesType {
  img: string;
  title: string;
}

const initialState: WatchedMoviesType[] = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1013_.jpg",
    title: "Rebel Moon - Part One: A Child of Fire",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1013_.jpg",
    title: "Rebel Moon - Part One: A Child of Fire",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMzkyOTUzYTUtY2UzYS00MjY4LTljZWYtYzMyMmZlMWYwMjQ5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY12076_.jpg",
    title: "Rebel Moon - Part One: A Child of Fire",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BODRiMTA4NGMtOTQzZC00OWFjLWFmODctMjY2ZTcwYjI5NDMyXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX604_.jpg",
    title: "Rebel Moon - Part One: A Child of Fire",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYzlhNzBmYjUtNjRmZC00MDg3LWE4NDMtZDNjODUwNTljMzhlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1013_.jpg",
    title: "Rebel Moon - Part One: A Child of Fire",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BNjM2N2MyNTYtZTFmMS00NDIwLWE4MGEtNGJmZGM3MjgwNTFkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1013_.jpg",
    title: "Rebel Moon - Part One: A Child of Fire",
  },
];

export const WatchedMoviesSlice = createSlice({
  name: "watchedMovies",
  initialState,
  reducers: {},
});


export default WatchedMoviesSlice.reducer;