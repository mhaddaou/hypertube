import { createSlice } from "@reduxjs/toolkit";




interface StateImageCover {
    selectedImage : number
}

const initialState : StateImageCover= {
    selectedImage : -1
}


export const StateImageCoverSlice = createSlice({
    name : 'StateImageCover',
    initialState,
    reducers:{
        setSelectedImage : (state, payload) =>{
            state.selectedImage = payload.payload.selectedImage;
        }
    }
})



export const { setSelectedImage } = StateImageCoverSlice.actions
export default StateImageCoverSlice.reducer;