import React, { useEffect, useState } from 'react';
import './app.css';
import axios from "axios";

function AppComponent() {

  const [airQuality,setAirQuality] = useState({})
        let today = new Date();
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',

        };

        const forecastData = [
    { day: 'Monday', icon: '🌤', temperature: '70°F' },
    { day: 'Tuesday', icon: '🌦', temperature: '68°F' },
    { day: 'Wednesday', icon: '🌧', temperature: '65°F' },
    // ...and so on
  ];

  const getAirQualityPrediction = async () => {
    const post = { fecha: "2023-05-28" }
    try {
      const res = await axios.post('https://prueba43345.azurewebsites.net/')
      console.log(res.data)
      setAirQuality(res.data)
    } catch (e) {
      alert(e)
    }
  }

  useEffect(()=>{
    getAirQualityPrediction();

  },[]);

  return (
    <div className="app">
      <div className="main_card">
          <div className="card">
              <h1 className="text-center card-title"> Apodaca</h1>
            <h1 className="text-center card-title">Hoy {today.toLocaleString('es-MX', options)}</h1>
            <div className="card-body text-center">
                Calidad de Aire
            </div>
             <p className="card-body text-center">
                 <span className="good">11 (PM2.5)</span>
                 <span>µg/m3</span>
            </p>

          </div>
      </div>
        <div className="main_card">
            <div className="card">
                <div className="forecast-table">
          <div className="forecast-day">Pronostico</div>

        </div>
      {forecastData.map((forecast, index) => (
        <div key={index} className="forecast-table">
          <div className="forecast-day">{forecast.day}</div>
          <div className="forecast-temperature">{forecast.temperature}</div>
        </div>
      ))}

    </div>
        </div>
        <div className="main_card">
            <div className="card">
                <div className="forecast-table">
                    <div className="forecast-day">Pronostico calidad del aire</div>

                </div>
        <div>
        { Object.keys(airQuality).map((key) => (
        <div  className="forecast-table">
          <div className="forecast-day">{key}</div>
          <div className="forecast-temperature">{airQuality[key].toFixed(2)} µg/m3</div>
        </div>
      ))}
        </div>


          </div>
        </div>

    </div>

  );
}

export default AppComponent;
