import { useEffect, useState } from "react";
import { api } from "../main";
import { WeatherForecast } from "../client";
import WeatherCard from "../components/weatherCard";

export default function Weather() {
  const [data, setData]= useState<WeatherForecast[] | undefined>();
  useEffect( ()=> {
    async function fetchData() {
      const data = await api.getWeatherForecast()
      data && setData(data)
    }
    fetchData()
  },[])
  return (
    <div>
      {data?.map((el, index) => {
        return <WeatherCard key={index} info={el}/>
      })}
    </div>
  );
}

