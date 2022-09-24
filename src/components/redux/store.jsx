import { configureStore } from "@reduxjs/toolkit";
import {itemsReducer, filterReducer} from './reducer'

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        filter: filterReducer,
    },
})