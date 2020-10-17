import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Day } from './src/Components/Day';
import { getWeather } from './src/Server/Weather';
import { getCurrentPosition } from './src/Server/Position';
import { TypeWeather, TypeDataPosition, TypeDateWeather } from './src/Interfaces';
import { Header } from './src/Components/Header';

export default function App() {
  const [result, setResult] = useState<Array<TypeDateWeather>>([]);
  const [place, setPlace] = useState<TypeWeather>({
    cityName: '',
    latitude: '0',
    longitude: '0',
  });
  const [days, setDays] = useState<number>(1);

  useEffect(() => {
    getCurrentPosition().then((value: TypeDataPosition) => {
      const { loc, city } = value;
      const path: string[] = loc.split(',');
      setPlace({
        ...place,
        cityName: city,
        latitude: path[0],
        longitude: path[1],
      });
    });
  }, []);

  useEffect(() => {
    const { cityName, latitude, longitude } = place;
    getWeather(latitude, longitude).then((weather: TypeDateWeather[]) => {
      setResult(weather);
    });
  }, [place]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header cityData={place.cityName} setDays={setDays} days={days} />
        {result.map((value: TypeDateWeather, index: number) => {
          if (index === 0) {
            return <Day dataWeather={value} todayWeather={true} key={index} />;
          } else if (index > 0 && index < days) {
            return <Day dataWeather={value} key={index} />;
          } else {
            return null;
          }
        })}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
