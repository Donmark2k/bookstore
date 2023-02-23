import React from 'react';

const AddBook = () => (
  <>
    <h3 className="bookH3">ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="author" />

      <select name="category">
        <option value="">Category</option>
        <option value="fiction">Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Literature">Literature</option>

      </select>

      <button type="submit" className="addBtn">ADD BOOK</button>

    </form>
  </>
);

export default AddBook;
