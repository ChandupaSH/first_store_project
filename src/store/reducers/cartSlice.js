import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addItemCart : (state , action) => {
            const id = action.payload.id
            const tempObj = state.find((elem) => elem.id === id)
            if(tempObj){
                tempObj.count += 1
            }else {
                state.push(action.payload)
            }     
        },
        deleteItemCart :(state , action) => {
            const id = action.payload.id
            const tempObj = state.find((elem) => elem.id === id)
            const index = state.findIndex(item => item.id === id)
            if(tempObj && tempObj.count > 1){
                tempObj.count -= 1
            }else {
                state.splice(index , 1)
            }   
            
            
        },
        clearItemCart : () => {
            return []
        }
            
        }
    }
)

export const cartSliceSelector = (state) => state.cart1
export const {addItemCart , deleteItemCart , clearItemCart} = cartSlice.actions
export default cartSlice.reducer

