import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const title = "Weather App";
  const subtitle = "Type of name of a city to get its temperature, humidity, and wind speed.";

  const [data, setData] = useState();
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2c70d56cc162c3f7b55f03952b1432aa`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
   
          
          <div className="words">
          </div>
          
          <div className="words">
        
        </div>
        {data && (
          <div className="display">
            <div className="weather">
              <p className="city">{data.name}    {data.main.temp}°F</p>
              <div className="weatherData">
              <p>{data.main.feels_like} °F</p>
              <p>{data.main.humidity}%</p>
              <p>{data.wind.speed}mph</p>
              </div>
            </div>
          </div>
        )}
     
      <footer>
        <p>Jesse Leach 2023</p>
      </footer>
    </div>
  );
}

export default App;
