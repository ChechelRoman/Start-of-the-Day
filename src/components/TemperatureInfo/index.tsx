import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ColorScheme } from '../../util/getColorScheme'

type TemperatureInfoProps = {
  feels_like: number | undefined;
  temp: number | undefined;
  colorScheme: ColorScheme | undefined;
}

export const TemperatureInfo: React.FC<TemperatureInfoProps> = ({ feels_like, temp, colorScheme }) => {
  return (
    <View style={styles.container}>
      <View style={styles.temperature_block}>
        <Text style={[styles.text, { color: colorScheme?.text_primary }]}>Temperature: </Text>
        <Text style={[styles.text, { color: colorScheme?.text_primary }]}>{temp?.toFixed(0)}{'\u00b0'}С</Text>
      </View>
      <View style={styles.temperature_block}>
        <Text style={[styles.text, { color: colorScheme?.text_primary }]}>Feels like: </Text>
        <Text style={[styles.text, { color: colorScheme?.text_primary }]}>{feels_like?.toFixed(0)}{'\u00b0'}С</Text>
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
    textAlign: "center",
  }
});
