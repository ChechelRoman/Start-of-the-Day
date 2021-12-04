import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WeatherData } from "../WeatherPage";

type TemperatureProps = {
  feels_like: number | undefined;
  temp: number | undefined;
}

export const Temperature: React.FC<TemperatureProps> = ({ feels_like, temp }) => {
  return (
    <View style={styles.container}>
      <View style={styles.temperature_block}>
        <Text style={styles.text}>Temperature: </Text>
        <Text style={styles.text}>{temp?.toFixed(0)}{'\u00b0'}</Text>
      </View>
      <View style={styles.temperature_block}>
        <Text style={styles.text}>Feels like: </Text>
        <Text style={styles.text}>{feels_like?.toFixed(0)}{'\u00b0'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: "flex",
    alignItems: "center",
    marginTop: '5%',
  },
  temperature_block: {
    marginBottom: '5%',
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
  }
});
