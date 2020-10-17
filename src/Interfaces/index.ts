export interface TypeWeather {
  cityName: string;
  latitude: string;
  longitude: string;
}

export interface TypeTime {
  [key: number]: string;
}

export interface TypeDataPosition {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

export interface TypeDateWeather {
  feels_like: [
    {
      min: { value: number; units: string };
      observation_time: string;
    },
    {
      max: { value: number; units: string };
      observation_time: string;
    }
  ];
  humidity: [
    {
      min: { value: number; units: string };
      observation_time: string;
    },
    {
      max: { value: number; units: string };
      observation_time: string;
    }
  ];
  lat: number;
  lon: number;
  observation_time: { value: string };
  temp: [
    {
      min: { value: number; units: string };
      observation_time: string;
    },
    {
      max: { value: number; units: string };
      observation_time: string;
    }
  ];
  weather_code: { value: string };
  wind_speed: [
    {
      min: { value: number; units: string };
      observation_time: string;
    },
    {
      max: { value: number; units: string };
      observation_time: string;
    }
  ];
}