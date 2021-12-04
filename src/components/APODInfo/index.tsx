import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type APPODInfoProps = {
  explanation: string | undefined;
  title: string | undefined;
  url: string | undefined;
};

export const APPODInfo: React.FC<APPODInfoProps> = ({ explanation, title, url }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Astronomy Picture of the Day</Text>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.image}
        source={{uri: `${url}`}}
      />
      <Text style={styles.explanation}>{explanation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    width: '90%',
  },
  header: {
    textAlign: "center",
    color: 'rgb(42, 96, 137)',
    fontSize: 20,
    paddingBottom: 10,
  },
  title: {
    textAlign: "center",
    color: 'rgb(42, 96, 137)',
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: "cover",
    alignSelf: "center",
    marginBottom: 10,
  },
  explanation: {
    alignSelf: "center",
    textAlign: "justify",
    color: 'rgb(42, 96, 137)',
  }
});