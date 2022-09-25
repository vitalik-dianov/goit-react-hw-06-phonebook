import { configureStore } from "@reduxjs/toolkit";
import {itemsReducer} from 'components/redux/itemsSlice'
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        filter: filterReducer,
    },
})