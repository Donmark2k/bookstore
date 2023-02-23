import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Categories from './components/categories';
import BookList from './components/bookList';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/bookList" element={<BookList />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
