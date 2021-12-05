import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { ColorScheme } from '../../util/getColorScheme'

type APPODInfoProps = {
  explanation: string;
  title: string;
  url: string;
  colorScheme: ColorScheme | undefined;
};

export const APPODInfo: React.FC<APPODInfoProps> = ({ explanation, title, url, colorScheme }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: colorScheme?.text_primary }]}>Astronomy Picture of the Day</Text>
      <Text style={[styles.title, { color: colorScheme?.text_primary }]}>{title}</Text>
      <Image
        style={styles.image}
        source={{uri: `${url}`}}
      />
      <Text style={[styles.explanation, { color: colorScheme?.text_primary }]}>{explanation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    width: '90%',
    alignSelf: "center",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 10,
  },
  title: {
    textAlign: "center",
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
    marginBottom: 20,
  }
});
