  
import { API_URL_WEATHER } from '../../Keys/index';
import { TypeDateWeather } from '../../Interfaces';

const weatherURL = 'https://api.climacell.co/v3/weather/forecast/daily';

export const getWeather: (
  lat: string,
  long: string
) => Promise<Array<TypeDateWeather>> = async (lat: string, long: string) => {
  try {
    const url = `${weatherURL}?lat=${lat}&lon=${long}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${API_URL_WEATHER}`;
    const response = await fetch(url, {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTPS ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error in climacell - ${error.message}`);
  }
};