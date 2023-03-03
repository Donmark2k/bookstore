/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const {
    title, id, author, category,
  } = book;
  const dispatch = useDispatch();

  return (
    <>
      <div className="bookContainer">
        <div className="bookDetails">
          <p className="category">
            {' '}
            {category}
          </p>
          <p className="title">
            {' '}
            {title}
          </p>
          <p className="author">
            {' '}
            {author}
          </p>
          <div className="buttonBox">
            <button type="button">Comment</button>
            <span>|</span>
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(id));
              }}
              value="Remove"
            >
              Remove
            </button>
            <span>|</span>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
