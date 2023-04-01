import { useEffect } from "react";
import {useState} from "react";
import axios from "axios";

function App() {
  const title = "Weather App";
  const subtitle = "Weather Report from Some of My Favorite Cities";

  const [data, setData,] = useState ({})
  const [location, setLocation] = useState ('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2c70d56cc162c3f7b55f03952b1432aa`; 

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="grid stretch">
        <div className="blur pic">
          <img src="https://media.istockphoto.com/id/599766748/photo/the-city-of-dreams-new-york-citys-skyline-at-twilight.jpg?s=612x612&w=0&k=20&c=Xl4svBmlDj67f78XK649lRiioherRzPG3KQ3qsUi0bo=" />
          <div className="words">
            <span>New York City</span>
          </div>
        </div>

        <div className="blur pic">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Der_Friedrichsplatz_und_der_Wasserturm.jpg" />
          <div className="words">
            <span>Mannheim</span>
          </div>
        </div>

        <div className="blur pic">
          <img src="https://www.hellolanding.com/blog/wp-content/uploads/2021/09/image2-12-1200x800.jpg" />
          <div className="words">
            <span>Jacksonville</span>
          </div>
        </div>

        <div className="display">
          <div className="weather">
          <p>{data.name}</p>
          <p>{data.main.temp}°F</p>
          <p>{data.main.humidity}</p>
          <p>{data.wind.speed}</p>
          </div>
        </div>
       
      </div>
      <footer>
        <p>Jesse Leach 2023</p>
      </footer>
    </div>
  );
}

export default App;
