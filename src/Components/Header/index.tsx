import React from 'react';
import { View, Text, StyleSheet, Picker} from 'react-native';
import { count } from '../../Constants';

interface Props {
  cityData: String;
  setDays: Function;
  days: number;
}

export const Header: React.FunctionComponent<Props> = ({ cityData, setDays, days }) => {
  return (
    <>
      <View>
        <Text style={styles.headerCity}>{cityData}</Text>        
      </View>
      <View>
        <Picker
          selectedValue={days}
          style={styles.pickerDays}
          onValueChange={(itemValue: string) => setDays(itemValue)}
        >
          {count.map((item: number) => <Picker.Item label={item.toString()} value={item} key={item}/>)}
        </Picker>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerCity: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  pickerDays: {
    height: 100,
    flex: 1,
    padding: 10,
    margin: 10
  }
});