import "./search_box.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

// API website :-    https://openweathermap.org/current
function search_box({ updateinfo }) {
    const [city, setCity] = useState("");

    const Api_url = "https://api.openweathermap.org/data/2.5/weather"
    const Api_key = "c37984bc606691d9055862ec849e9faf"
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let get_weather_inof = async () => {
        let response = await fetch(`${Api_url}?q=${city}&appid=${Api_key}&units=metric`)

        let data = await response.json();
        console.log(data);

        let result = {
            city: city,
            temp: data.main.temp,
            tempmin: data.main.temp_min,
            tempmax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        }
        console.log(result)
        return result;
    }


    let change = (e) => {
        setCity(e.target.value);
    }

    let submit = async (e) => {
        e.preventDefault();
        console.log(city);
        setCity("");
        let newinfo =await get_weather_inof();
        updateinfo(newinfo)
    }

    return (
        <div className='search_box'>
            <h2>Search for the Weather</h2>
            <br />
            <form onClick={submit}>
                <TextField id="city" label="City" variant="outlined" required value={city} onChange={change} />
                <br />
                <br />
                <Button variant="contained" type='submit' >Submit</Button>
            </form>
        </div>
    )
}

export default search_box