import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state) => state.books);

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
