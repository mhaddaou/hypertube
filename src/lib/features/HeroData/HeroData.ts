import { HeroFilms } from "@/app/Types/Interfaces/Interfaces";
import { createSlice } from "@reduxjs/toolkit";

import Image1 from "../../../../public/images/images/1.jpg"


const initialState : HeroFilms = {id: 2,image: Image1,  selected: false, title:'spider man no way home',
 description: "Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...", 
 rating: 4, genres: ['crime', 'drama', 'mystery'],year: 2021, 
 time: 1.55, link: '/'}

export const HeroDataSlice = createSlice({
    name: "heroData",
    initialState,
    reducers: {
        changeHeroData: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.id = action.payload.id;
            state.image = action.payload.image;
            state.genres = action.payload.genres;
            state.link = action.payload.link;
            state.rating = action.payload.rating;
            state.time = action.payload.time;
            state.year = action.payload.year;
            state.selected = action.payload.selected;          
        }
    }

})

export const { changeHeroData } = HeroDataSlice.actions;
export default HeroDataSlice.reducer;