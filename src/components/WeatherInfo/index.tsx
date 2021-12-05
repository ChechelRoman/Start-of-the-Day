import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { InfoItem } from "../InfoItem";
import { ColorScheme } from '../../util/getColorScheme'

type WeatherInfoProps = {
  cloudiness: number | string;
  wind_speed: number | string;
  humidity: number | string;
  colorScheme: ColorScheme  | undefined;
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ cloudiness, wind_speed, humidity, colorScheme }) => {
  return (
    <View style={[styles.container, { backgroundColor: colorScheme?.background_secondary }]}>
      <InfoItem
        header={'CLOUDINESS'}
        info={`${cloudiness}%`}
        colorScheme={colorScheme}
      />
      <InfoItem
        header={'WIND SPEED'}
        info={`${wind_speed} m/s`}
        colorScheme={colorScheme}
      />
      <InfoItem
        header={'HUMIDITY'}
        info={`${humidity}%`}
        colorScheme={colorScheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: '80%',
    borderRadius: 12,
    marginTop: '3%',
    alignSelf: "center",
  },
});
