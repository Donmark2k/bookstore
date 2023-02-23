import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
