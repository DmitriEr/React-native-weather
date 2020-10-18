import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Card from '@ant-design/react-native/lib/card';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import { days, monthes } from '../../Constants';
import { TypeDateWeather } from '../../Interfaces';

interface Props {
  dataWeather: TypeDateWeather;
  todayWeather?: boolean;
}

interface WeatherProps {
  value: number;
  units: string;
}

export const Day: React.FunctionComponent<Props> = ({
  dataWeather,
  todayWeather,
}) => {
  const temperature: number = Math.round(dataWeather.temp[1].max.value);
  const description: string = dataWeather.weather_code.value;

  const getData: () => string = () => {
    const dates: Date = new Date(dataWeather.observation_time.value);
    const num: number = dates.getDate();
    const day: number = dates.getDay();
    const month: number = dates.getMonth();
    return `${num} ${monthes[month]}, ${days[day]}`;
  };

  const number: string = getData();

  const showDetails = () => {
    const wind: WeatherProps = dataWeather.wind_speed[1].max;
    const humidity: WeatherProps = dataWeather.humidity[1].max;
    const feelsLike: WeatherProps = dataWeather.feels_like[1].max;
    if (todayWeather) {
      return (
        <View>
          <Text style={styles.weatherContent}>{`Temperature: ${temperature} °C`}</Text>
          <Text style={styles.weatherContent}>{`Wind speed: ${wind.value} ${wind.units}`}</Text>
          <Text style={styles.weatherContent}>{`Humidity: ${humidity.value} ${humidity.units}`}</Text>
          <Text style={styles.weatherContent}>{`Feels like: ${feelsLike.value} ${feelsLike.units}`}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>{`Temperature: ${temperature} °C`}</Text>
      </View>
    );
  };

  return (
    <>
      <View>
        <WhiteSpace size="lg" />
        <Card full style={styles.card}>
          <Card.Header
            title={description.split('_').join(' ')}
            thumbStyle={{ width: 30, height: 30 }}
            extra={number}
          />
          <Card.Body>
            {showDetails()}
          </Card.Body>
          <Card.Footer content="Have fun day" />
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  weatherContent: {
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    backgroundColor: '#adf',
    padding: 10,
    margin: 10
  }
});