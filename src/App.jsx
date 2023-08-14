import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header';
import SearchBar from './components/Search';
import WeatherCard from './components/WeatherCard';
import TempUnitBox from './components/TempUnitBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <WeatherCard cityName='Dallas' temp='90' time='12:30am'/>
      <TempUnitBox unit='f' />
    </>
  )
}

export default App
