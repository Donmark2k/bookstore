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
      <div>
        < div className="bookDetails">
      <p>
          {' '}
          Category:
          {category}
        </p>
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
        <div className="buttonBox" >
        <button>Comment</button>

        <button
          type="button"
          onClick={() => {
            dispatch(removeBook(id));
          }}
          value="Remove"
        >
          Remove
        </button>
        <button>Edit</button>
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
