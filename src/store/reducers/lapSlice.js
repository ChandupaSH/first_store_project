import { createSlice } from "@reduxjs/toolkit";


const initialState1 = [
    {
        id : 1,
        brand : 'azuz',
        cpu : 'i3 9gen',
        ram : 16,
        price : 300000,
        image : 'https://m.media-amazon.com/images/I/71ehzrGUO7L.jpg'
        
    },
    {
        id : 2,
        brand : 'DELL',
        cpu : 'i9 13gen',
        ram : 16,
        price : 200000,
        image : 'https://i5.walmartimages.com/asr/f249df91-f755-45b1-8621-9b41063d9d80.f13d4b712a72f05721014070612ae5f5.jpeg' 
    },
    {
        id : 3,
        brand : 'Apple',
        cpu : 'i3 9gen',
        ram : 16,
        price : 700000 ,
        image : 'https://idealz.lk/wp-content/uploads/2021/01/Mac-Book-Air-M1-2.jpg'
    },
    // {
    //     id : 4,
    //     brand : 'HP',
    //     cpu : 'i9',
    //     ram : 32,
    //     price : 200000 
    // },
    // {
    //     id : 5,
    //     brand : 'HP',
    //     cpu : 'i9',
    //     ram : 32,
    //     price : 200000 
    // },
    // {
    //     id : 6,
    //     brand : 'HP',
    //     cpu : 'i9',
    //     ram : 32,
    //     price : 200000 
    // }
]

const lapSlice = createSlice({
    name : 'lap',
    initialState : initialState1,
    reducers : {
        addLap : (state , action) => {
            state.push(action.payload)
        }
    }
})

export const lapSliceSelector = (state) => state.lap1
export const {addLap} = lapSlice.actions
export default lapSlice.reducer






