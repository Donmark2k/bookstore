import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/booksSlice' ;



// import AddBtn from './button/addButton'

const AddBook = () => {
const books = useSelector((state) => state.books.books);
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
  const itemId = `item${books.length + 1}`;
  e.preventDefault();
  if (title ==='' && author ===''){
  dispatch(addBook({ item_id: itemId, title, author }));
  setTitle('');
  setAuthor('');
  }
};


return (
  <>
    <h3 className="bookH3">ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" onChange={handleInputTitle} value={title} required />
      <input type="text" placeholder="author" onChange={handleInputAuthor} value={author} required />
      <button type="submit" className="addBtn" onClick={handleSubmit}>ADD BOOK</button>

    </form>
  </>
);
}
export default AddBook;
