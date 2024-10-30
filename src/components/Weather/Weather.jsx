import { useEffect, useState } from "react";
import { WiThermometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { BsDropletHalf } from "react-icons/bs";
import moment from 'moment'
import './Weather.css';
export default function Weather() {

    const[weather,setWeather] = useState(null);

    useEffect(()=>{
        fetch("https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=ClI81YJZiIoD9fAYAyI0Cb9eZzVueLsx")
        .then((data)=>data.json())
        .then((data)=>setWeather(data))
        .catch((error)=>console.log(error));
    },[]);

    console.log(weather);
    return (
        <div className="container" >
            <div className="weather-header">
                <span>{moment().format('MM-D-YYYY')}</span>
                <span>{moment().format('h:mm a')}</span>
                </div> 
            <div className="weather-footer">
                <div className="day-condition">
                <WiThunderstorm className="icon-style"/>
                {weather ? weather.timelines.daily[0].values.temperatureAvg > 20 ? "Sunny" : "Winter" : "Loading"}
            </div>
            <div className="border">|</div>
            <div className="temperature-pressure" >
            {`${weather ? weather.timelines.daily[0].values.temperatureAvg : "00.00"}°C`}
            <span>
            <WiThermometer className="icon-style" />
            {`${weather ? weather.timelines.daily[0].values.pressureSurfaceLevelAvg : "00.00"} mbar`}
            <br /> Pressure
            </span>
            </div>
            <div className="border">|</div>
            <div className="wind-humidity"> 
                <span>
                <WiStrongWind className="icon-style" /> 
                {`${weather ? weather.timelines.daily[0].values.windSpeedAvg: "00.00"} km/h`}
                <br /> Wind
                </span>
                <span>
                <BsDropletHalf className="icon-style" />
                {`${weather ? weather.timelines.daily[0].values.humidityAvg : "00.00"} %`}
                <br /> Humidity
                </span>  
                 </div>
            </div>
        </div>
      
    )
}