import { HeroFilms } from "@/app/Types/Interfaces/Interfaces";
import { createSlice } from "@reduxjs/toolkit";

import Image1 from "../../../../public/images/images/1.jpg"
import { Movies } from "../Hero/hero";
import { useAppSelector } from "@/lib/hooks";


const initialState: Movies = {
    "genres": [
        "Drama"
    ],
    "id": 54329,
    "language": "en",
    "large_cover_image": "https://yts.mx/assets/images/movies/national_theatre_live_prima_facie_2022/large-cover.jpg",
    "medium_cover_image": "https://yts.mx/assets/images/movies/national_theatre_live_prima_facie_2022/medium-cover.jpg",
    "rating": 9.100000381469727,
    "small_cover_image": "https://yts.mx/assets/images/movies/national_theatre_live_prima_facie_2022/small-cover.jpg",
    "summary": "Tessa is a thoroughbred. A young, brilliant barrister who loves to win. She has worked her way up from working class origins to be at the top of her game; defending; cross examining and lighting up the shadows of doubt in any case. An unexpected event forces her to confront the lines where the patriarchal power of the law, burden of proof and morals diverge. Jodie Comer makes her West End Debut in the UK premiere of Suzie Miller's award-winning, gripping play PRIMA FACIE which takes us to the heart of where emotion and experience collide with the rules of the game. Justin Martin directs this solo actor tour de force at the intimate Harold Pinter Theatre for a strictly limited season.",
    "synopsis": "Tessa is a thoroughbred. A young, brilliant barrister who loves to win. She has worked her way up from working class origins to be at the top of her game; defending; cross examining and lighting up the shadows of doubt in any case. An unexpected event forces her to confront the lines where the patriarchal power of the law, burden of proof and morals diverge. Jodie Comer makes her West End Debut in the UK premiere of Suzie Miller's award-winning, gripping play PRIMA FACIE which takes us to the heart of where emotion and experience collide with the rules of the game. Justin Martin directs this solo actor tour de force at the intimate Harold Pinter Theatre for a strictly limited season.",
    "title": "National Theatre Live: Prima Facie",
    "title_english": "National Theatre Live: Prima Facie",
    "title_long": "National Theatre Live: Prima Facie (2022)",
    "watched": false,
    "year": 2022
}

export const HeroDataSlice = createSlice({
    name: "heroData",
    initialState,
    reducers: {
        changeHeroData: (state, action) => {
            console.log(action.payload.title , "action.payload.title")
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