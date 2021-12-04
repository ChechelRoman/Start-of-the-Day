import React from "react";
import { StyleSheet, View, Text } from "react-native";

type WeatherInfoProps = {
  cloudiness: number | undefined;
  wind_speed: number | undefined;
  humidity: number | undefined;

}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ cloudiness, wind_speed, humidity }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>CLOUDINESS</Text>
        <Text style={styles.info}>{cloudiness}</Text>
      </View>
      <View>
        <Text style={styles.header}>WIND SPEED</Text>
        <Text style={styles.info}>{wind_speed}</Text>
      </View>
      <View>
        <Text style={styles.header}>HUMIDITY</Text>
        <Text style={styles.info}>{humidity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: '80%',
    backgroundColor: 'rgb(253, 252, 252)',
    borderRadius: 12,
    marginTop: '3%',
  },
  header: {
    textAlign: "center",
    color: 'rgb(196, 196, 196)',
    paddingTop: 10,
  },
  info: {
    textAlign: "center",
    color: 'rgb(139, 139, 139)',
    paddingBottom: 10,
  }
});
