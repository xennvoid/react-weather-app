import axios from 'axios';
import { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import './styles/App.css'

function App() {

  const [weatherData,setWeatherData] = useState({})
  const [location,setLocation] = useState('')
  const [temp,setTemp] = useState(0)
  const [tempUnits,setTempUnits] = useState('C')

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=394b0c1be6a6843c9ce704d7fcc90f62`

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setWeatherData(response.data)
        setTemp(response.data.main.temp.toFixed())
        console.log(response.data)
      })
      setLocation('')   
    }     
  }

   function celsiusToFahrenheit() {
    setTempUnits('F');
    setTemp(((temp * 9/5) + 32).toFixed());
  }

  function fahrenheitToCelsius() {
    setTempUnits('C');
    setTemp(((temp - 32) * 5/9).toFixed());
  }

  return (
    <div className="container">
      <Search location={location} setLocation={setLocation} getWeather={getWeather}/>
      {Object.keys(weatherData).length > 0?
        <WeatherCard 
          data={weatherData} 
          temp={temp} 
          tempUnits={tempUnits} 
          celsiusToFahrenheit={celsiusToFahrenheit}
          fahrenheitToCelsius={fahrenheitToCelsius}
        />
        :''
      }
    </div>
  );
}

export default App;
