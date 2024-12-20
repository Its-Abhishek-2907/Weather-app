import React, { useState } from 'react'
import Search_box from './search_box'
import Info_box from "./info_box";

const weatherApp = () => {

    const [Weathers,setWeathers]=useState({
        city: 'UP',
        temp: 30,
        tempmin: 30,
        tempmax: 40,
        humidity: 20,
        feelsLike: 42,
        weather: 'Hot',
    })
    
    let updateinfo=(newinfo)=>{
        setWeathers(newinfo)
    }

  return (
    <>
      <Search_box updateinfo={updateinfo} />
      <Info_box info={Weathers} />
    </>
  )
}

export default weatherApp