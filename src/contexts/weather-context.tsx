import React, { useEffect, useState, useCallback } from "react"
import type { WeatherData } from "../types/weather"
import { WeatherContext } from "./weather-context-helpers"

export const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [city, setCity] = useState<string>("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const getWeather = useCallback(
    async (city: string) => {
      try {
        setLoading(true)
        setError("")
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        if (!res.ok) throw new Error("Ville non trouvée")
        const data: WeatherData = await res.json()
        setWeather(data)
        localStorage.setItem("lastCity", city)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError(String(error))
        }
        setWeather(null)
      } finally {
        setLoading(false)
      }
    },
    [API_KEY]
  )

  useEffect(() => {
    const saved = localStorage.getItem("lastCity")
    if (saved) {
      setCity(saved)
      getWeather(saved)
    }
  }, [getWeather])

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weather, loading, error, getWeather }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
