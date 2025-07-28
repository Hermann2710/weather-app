import { createContext, useContext } from "react"
import type { WeatherData } from "../types/weather"

export interface WeatherContextType {
  city: string
  setCity: (city: string) => void
  weather: WeatherData | null
  loading: boolean
  error: string
  getWeather: (city: string) => void
}

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
)

export const useWeatherContext = () => {
  const ctx = useContext(WeatherContext)
  if (!ctx)
    throw new Error(
      "Le useWeatherContext doit etre utilisé dans un WeatherContextProvider"
    )
  return ctx
}
