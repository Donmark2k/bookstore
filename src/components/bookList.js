import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './Book';

// const BookList = () => {
//   const { books } = useSelector((state) => state);
//    console.log(books);
//   return (
//     <>
//       { books.map((book) => <Book key={book.item_id} title={book.title} author={book.author} />) }
      

//     </>
//   );
// };

// export default BookList;
const BookList = () => {
  const { books } = useSelector((state) => state);

  return (
    <> 
    <div>
      { 
        books.books.map((book) => 
      <Book key={book.item_id} title={book.title} author={book.author}
       />) 
       }
       </div>
      <AddBook />

    </>
  );
};

export default BookList;

