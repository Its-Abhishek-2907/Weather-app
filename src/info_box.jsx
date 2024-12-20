import React from 'react'
import './info_box.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const info_box = ({ info }) => {


    // const photo = "https://images.unsplash.com/photo-1518109623266-338ba2429e4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const hot = "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=52GrDm13eHcGe1x5oDv62o5MJ__0hwJllf1kJEzWfXo="
    const cold="https://images.unsplash.com/photo-1611849720532-dc03b372aa12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvb2wlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const rain="https://images.unsplash.com/photo-1456400761117-a768c370cd6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW58ZW58MHx8MHx8fDA%3D"
    return (
        <>
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain : info.temp > 15 ? hot : cold }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>City is :- {info.city} </p>
                            <p>Temp is :-  {info.temp}&deg;C </p>
                            <p> Humidity is :-  {info.humidity}  </p>
                            <p>Temp min is :-  {info.tempmin}&deg;C </p>
                            <p>Temp max is :-  {info.tempmax}&deg;C </p>
                            <p>The waeather can be described as <i>{info.weather}</i> and feels like{info.feels_like}&deg;C </p>
                            <p></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default info_box