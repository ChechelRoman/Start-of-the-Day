import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

type DateInfoProps = {
  timezone: number | undefined;
};

export const DateInfo: React.FC<DateInfoProps> = ({ timezone }) => {
  const [date, setDate] = useState<Date>();
  const newDate = new Date();
  let timezoneInMiliSeconds = 0;

  if (timezone !== undefined) {
    timezoneInMiliSeconds = timezone * 1000;
  }

  useEffect(() => {
    setDate(new Date((newDate.getTime() + newDate.getTimezoneOffset() * 60000) + timezoneInMiliSeconds));
    const timer = setInterval(() => setDate(new Date((newDate.getTime() + newDate.getTimezoneOffset() * 60000) + timezoneInMiliSeconds)), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [date]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>TIME</Text>
        <Text style={styles.info}>{date?.toTimeString().substring(0, 8)}</Text>
      </View>
      <View>
        <Text style={styles.header}>DATE</Text>
        <Text style={styles.info}>{date?.toString().substring(4, 15)}</Text>
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
