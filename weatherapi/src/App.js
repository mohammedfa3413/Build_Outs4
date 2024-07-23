import './App.css';
import {useState} from "react"
import SearchBar from './Components/SearchBar/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';

function App() {
  const [city,setcity] = useState("");

  const handelSearch = (e) =>{
    setcity(e);
  }
  return (
    <>
     <SearchBar onSearch={handelSearch}/>
     <WeatherDisplay city={city}/>
    </>
  );
}

export default App;
