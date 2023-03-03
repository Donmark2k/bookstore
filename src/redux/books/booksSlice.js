import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pjWgrz0ikxleypZxZkv7/books';

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
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return newBook;
});

export const removeBook = createAsyncThunk('removeBook', async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload[0];
      updatedState.books = newStore;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      const item = action.payload;
      state.books.push(item);
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      const id = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.id !== id);
      return newState;
    });
  },
});

export default bookSlice.reducer;
