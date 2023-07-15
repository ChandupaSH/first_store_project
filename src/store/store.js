import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import lapSlice from "./reducers/lapSlice";

const store = configureStore({
    reducer: {
       lap1 : lapSlice,
       cart1 : cartSlice
    }
})

export default store