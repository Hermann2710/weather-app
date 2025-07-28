import { LoaderIcon, Search, SunSnowIcon } from "lucide-react"
import { useWeatherContext } from "../contexts/weather-context-helpers"
import WeatherCard from "./weather-card"

export default function WeatherUI() {
  const { city, setCity, getWeather, loading, error, weather } =
    useWeatherContext()
  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-3xl font-bold mb-4 flex items-center gap-2'>
        <SunSnowIcon /> Météo
      </h1>
      <div className='flex gap-2'>
        <input
          type='text'
          name='city'
          id='city'
          className='border p-2 rounded'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather(city)}
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:cursor-not-allowed'
          onClick={() => getWeather(city)}
          disabled={loading ? loading : city.length < 1}
        >
          {loading ? <LoaderIcon className='animate-spin' /> : <Search />}
        </button>
      </div>
      {error && <p className='mt-4 text-red-500'>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  )
}
