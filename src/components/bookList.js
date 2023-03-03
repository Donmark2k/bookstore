import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './Book';
import { fetchBook } from '../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <>
      <div>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default BookList;
