import { useEffect, useState } from 'react';
import classes from './WeatherCard.module.css'


const WeatherCard = ({data}) => {
    
    const [temp,setTemp] = useState(data.main.temp.toFixed())
    const [tempUnits,setTempUnits] = useState('C')

    useEffect(() => {
        setTemp(data.main.temp.toFixed())
        setTempUnits('C')
    },[data])

    function celsiusToFahrenheit() {
        setTempUnits('F');
        setTemp(((temp * 9/5) + 32).toFixed());
    }
    
    function fahrenheitToCelsius() {
        setTempUnits('C');
        setTemp(((temp - 32) * 5/9).toFixed());
    }


    return (
        <div className={classes.weather__card}>

            <div className={classes.weather__img}>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
            </div>   
            <div 
                className={classes.weather__temp}
                onClick={tempUnits === 'C'?celsiusToFahrenheit:fahrenheitToCelsius}
            >
                {temp}
                    &deg;
                {tempUnits}
            </div>
            <div className={classes.weather__city}>
                {data.name}<sup>{data.sys.country}</sup>
            </div>
            <div className={classes.weather__description}>{data.weather[0].main}</div>
            <div className={classes.weather__others}>
                <div className={classes.weather__humidity}>
                    <p>Humidity</p>{data.main.humidity}%
                </div>
                <div className={classes.weather__pressure}>
                    <p>Pressure</p>{data.main.pressure}hPa
                </div>
                <div className={classes.weather__wind}>
                    <p>Wind speed</p>{data.wind.speed}m/s
                </div>
            </div>
            
        </div>
    )

}

export default WeatherCard;