import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const itemsInitState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsInitState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteItem(state, action) {
      const index = state.contacts.findIndex(el => el.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { addItem, deleteItem } = itemsSlice.actions;
export const getItems = state => state.items.contacts;
const persistConfigItems = {
  key: 'contacts',
  storage,
};
export const persistedReducerItems = persistReducer(
  persistConfigItems,
  itemsReducer
);
