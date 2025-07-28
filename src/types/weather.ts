export interface WeatherData {
  name: string
  sys: { country: string }
  weather: { main: string; description: string; icon: string }[]
  main: { temp: number; humidity: number }
  wind: { speed: number }
}
