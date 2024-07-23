import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';

function WeatherDisplay({city}) {
    const [weather , setweather] = useState(null);
    const [loading, setloading] = useState(false);

    const getweatherData = async ()=>{
       try {
        const data =await fetch("https://api.weatherapi.com/v1/current.json",{
            params:{
                key:"fc94c75f2eb247c1bea231114241607",
                q:city
            }    
        })
        const res = await data.json()
        setweather(res.data);
       } catch (error) {
        console.log("error to fetch the data " , error);
        alert("Failed to Fetch The Data")
       }finally{
        setloading(false)
       }
    }


    useEffect(()=>{
        if(city){
            setloading(true);
            getweatherData()
        }
    },[city])

  return (
    <div>
      {loading && <p>Loading data..</p>}
      {!loading && weather &&
      <div>
         <Cards  title="temperature" data={`${weather.current.temp_c}C`}/>  
       <Cards  title="Humidity" data={`${weather.current.humidity}%`}/>
       <Cards  title="Condition" data={`${weather.current.condition.text}`}/> 
       <Cards  title="Wind Speed" data={`${weather.current.wind_kph} kph`}/>
      </div>
      
      }
    </div>
  )
}

export default WeatherDisplay
