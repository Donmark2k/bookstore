import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Categories from './components/categories'

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        {/* <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/books" element={<Book />} />
        </Routes> */}
      </>
    </div>
  );
}

export default App;
