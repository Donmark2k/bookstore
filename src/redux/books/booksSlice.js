import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pjWgrz0ikxleypZxZkv7/books'
const initialState = {
  books: [],
};

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await fetch(url);
  const data = await res.json();
  const books = [
    Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    })),
  ];
  console.log(books)
  return books;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
