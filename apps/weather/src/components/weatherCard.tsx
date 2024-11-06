import { WeatherForecast } from "../client";

interface IWeatherCard{
  info: WeatherForecast
}

const WeatherCard = ({info}: IWeatherCard) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <h2 className="text-xl font-bold mb-2">{info.date}</h2>
      <p className="text-gray-700 text-base" >
       {info.temperatureC && info.temperatureF && `Temperature: ${info.temperatureC}°C / ${info.temperatureF}°F`}
      </p>
      {info.summary && (
        <p className="text-gray-600 text-sm italic mt-2">{info.summary}</p>
      )}
    </div>
  );
};

export default WeatherCard;
