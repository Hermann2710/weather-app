import { Droplet, Thermometer, Wind } from "lucide-react"
import type { WeatherData } from "../types/weather"

export default function WeatherCard({ data }: { data: WeatherData }) {
  return (
    <div className='mt-6 p-6 rounded shadow-md bg-white text-center w-[300px]'>
      <h2 className='text-xl font-semibold'>
        {data.name}, {data.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt='icone météo'
        className='mx-auto'
      />
      <p>{data.weather[0].description}</p>
      <p className='flex justify-center items-center gap-1 mt-1'>
        <Thermometer /> Température: {data.main.temp}°C
      </p>
      <p className='flex justify-center items-center gap-1 mt-1'>
        <Droplet /> Humidité: {data.main.humidity}%
      </p>
      <p className='flex justify-center items-center gap-1 mt-1'>
        <Wind /> Vent: {data.wind.speed} km/h
      </p>
    </div>
  )
}
