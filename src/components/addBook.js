import React from 'react';

const AddBook = () => (
  <>
    <h3 className="bookH3">ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="author" />
      <button type="submit" className="addBtn">ADD BOOK</button>

    </form>
  </>
);

export default AddBook;
