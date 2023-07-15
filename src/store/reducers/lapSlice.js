import { createSlice } from "@reduxjs/toolkit";


const initialState1 = [
    // {
    //     id : 1,
    //     brand : 'DELL',
    //     cpu : 'i3',
    //     ram : 16,
    //     price : 300000,
        
    // },
    // {
    //     id : 2,
    //     brand : 'azuz',
    //     cpu : 'i9',
    //     ram : 16,
    //     price : 200000 
    // },
    // {
    //     id : 3,
    //     brand : 'Apple',
    //     cpu : 'i3',
    //     ram : 16,
    //     price : 700000 
    // },
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






