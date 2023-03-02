import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pjWgrz0ikxleypZxZkv7/books'

const initialState = {
  books: [],
};

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)

  const books = [
    Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    })),
  ];
  return books;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers: {
    [fetchBook.fulfilled]: (state, action) => {
      const updatedState = state;
      const newStore = action.payload[0];
      updatedState.books = newStore;
    },
  }
});



export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
