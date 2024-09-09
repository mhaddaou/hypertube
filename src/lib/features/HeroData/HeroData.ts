import { HeroFilms } from "@/app/Types/Interfaces/Interfaces";
import { createSlice } from "@reduxjs/toolkit";

import Image1 from "../../../../public/images/images/1.jpg"
import { Movies } from "../Hero/hero";
import { useAppSelector } from "@/lib/hooks";


const initialState: Movies = {
    "genres": [
        "Action",
        "Crime",
        "Drama",
        "Mystery",
        "Thriller"
    ],
    "id": 7548,
    "language": "en",
    "large_cover_image": "https://yts.mx/assets/images/movies/den_of_thieves_2018/large-cover.jpg",
    "medium_cover_image": "https://yts.mx/assets/images/movies/den_of_thieves_2018/medium-cover.jpg",
    "rating": 7,
    "small_cover_image": "https://yts.mx/assets/images/movies/den_of_thieves_2018/small-cover.jpg",
    "summary": "A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan an impossible heist on the Federal Reserve Bank of downtown Los Angeles.—STXfilms",
    "synopsis": "A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan an impossible heist on the Federal Reserve Bank of downtown Los Angeles.—STXfilms",
    "title": "Den of Thieves",
    "title_english": "Den of Thieves",
    "title_long": "Den of Thieves (2018)",
    "watched": false,
    "year": 2018
}

export const HeroDataSlice = createSlice({
    name: "heroData",
    initialState,
    reducers: {
        changeHeroData: (state, action) => {
            state.title = action.payload.title;
            state.genres = action.payload.genres;
            state.id = action.payload.id;
            state.language = action.payload.language;
            state.large_cover_image = action.payload.large_cover_image;
            state.medium_cover_image = action.payload.medium_cover_image;
            state.rating = action.payload.rating;
            state.small_cover_image = action.payload.small_cover_image;
            state.summary = action.payload.summary;
            state.synopsis = action.payload.synopsis;
            state.title_english = action.payload.title_english;
            state.title_long = action.payload.title_long;
            state.watched = action.payload.watched;
            state.year = action.payload.year;

        }
    }

})

export const { changeHeroData } = HeroDataSlice.actions;
export default HeroDataSlice.reducer;