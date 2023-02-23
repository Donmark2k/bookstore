import React from 'react';

const AddBook = () => {
    return (
        <>
        <h1>ADD NEW BOOK</h1>
        <form>
      <input type="text" placeholder="Book title" />

        <select name="category">
        <option value="">Category</option>
        <option value="fiction">Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Literature">Literature</option>


      </select>

      <button type="submit">ADD BOOK</button>

        </form>
        </>
    )
}

export default AddBook;