import { useEffect, useState } from "react";
import { WeatherForecast } from "../client";
import WeatherCard from "../components/weatherCard";
import { api } from "./app";

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

