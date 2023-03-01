/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const {
    title, item_id, author, category,
  } = book;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };
  return (
    <>
      <div>
        <p>
          {' '}
          Title:
          {title}
        </p>
        <p>
          {' '}
          Author:
          {author}
        </p>
        <p>
          {' '}
          {category}
        </p>
        <button
          type="button"
          onClick={() => handleDelete(item_id)}
          value="Remove"
        >
          Remove
        </button>
      </div>
    </>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
