import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const {
    title, id, author, category,
  } = book;
  const dispatch = useDispatch();
  const chapterComp = Math.round(Math.random() * 20);

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
        <div className="updateContainer">

        <div className="circle-container">
          <div className="circle" style={{ width: 80, height: 80 }}>
            <CircularProgressbar value={Math.round((chapterComp / 20) * 100)} />

          </div>
          <div className="circle-text">
            <p className="percentage">
              {Math.round((chapterComp / 20) * 100)}
              %
            </p>
            <p className="completedText">Completed</p>
          </div>
        </div>
         <span className="bar">|</span>
        <div className="chapterContainer">
          <p className="currentChapter">CURRENT CHAPTER</p>
          <p className="chapterNo">Chapter 3: `&quot;`A Lesson Learned`&quot;`</p>
          <button type="button" className="chapterBtn">UPDATE PROGRESS</button>
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
