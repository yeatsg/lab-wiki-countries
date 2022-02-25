import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <CountriesList />
        <div className="row">
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
      <br />
      <p>You have reached the end of the page.</p>
      <Link to="/">Top of page</Link>
    </div>
  );
}

export default App;
