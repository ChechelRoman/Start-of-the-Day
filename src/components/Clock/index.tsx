import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

type ClockProps = {
  timezone: number | undefined;
};

export const Clock: React.FC<ClockProps> = ({ timezone }) => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    const newDate = new Date();
    let timezoneInMiliSeconds = 0;

    if (timezone !== undefined) {
      timezoneInMiliSeconds = timezone * 1000;
    }

    const timer = setInterval(() => setDate(new Date((newDate.getTime() + newDate.getTimezoneOffset() * 60000) + timezoneInMiliSeconds)), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [date]);

  return (
    <View>
      <Text style={styles.text}>TIME</Text>
      <Text style={styles.text}>{date?.toTimeString().substring(0, 8)}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  }
});
