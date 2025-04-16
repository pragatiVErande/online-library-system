import { createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from './Books';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push({ ...action.payload, id: state.length + 1 });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

