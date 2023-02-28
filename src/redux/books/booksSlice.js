import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  item_id: 'item1',
  title: 'The Great Gatsby',
  author: 'John Smith',
  category: 'Fiction',
},
{
  item_id: 'item2',
  title: 'Anna Karenina',
  author: 'Leo Tolstoy',
  category: 'Fiction',
},
{
  item_id: 'item3',
  title: 'The Selfish Gene',
  author: 'Richard Dawkins',
  category: 'Nonfiction',
},
];


const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => [state.filter((item) => item.id !== action.id)],
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
