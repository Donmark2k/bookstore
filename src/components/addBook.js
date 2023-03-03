import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleInputAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuidv4();
    const sentId = uniqueId.slice(0, 6);
    if (title && author) {
      const newBook = {
        item_id: sentId,
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <>
      <h3 className="bookH3">ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          onChange={handleInputTitle}
          value={title}
          required
        />
        <input
          type="text"
          placeholder="author"
          onChange={handleInputAuthor}
          value={author}
          name="author"
          required
        />
        <button type="submit" className="addBtn" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </>
  );
};
export default AddBook;
