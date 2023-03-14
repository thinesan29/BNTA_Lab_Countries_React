import logo from './logo.svg';
import './App.css';
import CountryForm from './Components/CountryForm';
import CountryContainer from './Containers/CountryContainer';

function App() {
  return (
    <>
    <h1>Country Bucket List</h1>
    <h2>Select all the countries you have visited!</h2>
    <CountryForm/>
    <CountryContainer/>
    </>
  );
}

export default App;
