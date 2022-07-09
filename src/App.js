import axios from 'axios';
import { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import './styles/App.css'

function App() {

  const [weatherData,setWeatherData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=394b0c1be6a6843c9ce704d7fcc90f62`

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setWeatherData(response.data)
        console.log(response.data)
      })
      setLocation('')   
    }     
  }

  return (
    <div className="container">
      <h1>Weather APP</h1>
      <Search location={location} setLocation={setLocation} getWeather={getWeather}/>
      {Object.keys(weatherData).length > 0?
        <WeatherCard 
          data={weatherData} 
        />
        :''
      }
    </div>
  );
}

export default App;
