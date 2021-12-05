import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { InfoItem } from "../InfoItem";
import { ColorScheme } from '../../util/getColorScheme'

type DateInfoProps = {
  colorScheme: ColorScheme | undefined;
  dateInitial: Date;
};

export const DateInfo: React.FC<DateInfoProps> = ({ colorScheme, dateInitial }) => {
  const [date, setDate] = useState<Date>(dateInitial)

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date(date.getTime() + 1000)), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [date]);

  return (
    <View style={[styles.container, { backgroundColor: colorScheme?.background_secondary }]}>
      <InfoItem
        header={'TIME'}
        info={date.toTimeString().substring(0, 8)}
        colorScheme={colorScheme}
      />
      <InfoItem
        header={'DATE'}
        info={date.toString().substring(4, 15)}
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
    alignSelf: "center",
  },
});
