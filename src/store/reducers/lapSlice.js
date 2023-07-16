import { createSlice } from "@reduxjs/toolkit";


const initialState1 = [
    {
        id : 1,
        brand : 'acer',
        cpu : 'i3 9gen',
        ram : 16,
        price : 300000,
        image : 'https://www.91-cdn.com/hub/wp-content/uploads/2023/05/Acer-Aspire-5-1200x900.jpg'
        
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
        brand : 'Apple MacBook Air',
        cpu : 'i3 9gen',
        ram : 16,
        price : 700000 ,
        image : 'https://www.macthai.com/wp-content/uploads/2018/10/MacBook-Air-gold-10302018.jpg'
    }
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






