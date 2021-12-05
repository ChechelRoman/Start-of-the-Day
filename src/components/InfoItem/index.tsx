import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ColorScheme } from '../../util/getColorScheme'

type InfoItemProps = {
  header: string;
  info: number | string;
  colorScheme: ColorScheme  | undefined;
};

export const InfoItem: React.FC<InfoItemProps> = ({ header, info, colorScheme }) => {
  return (
    <View>
      <Text style={[styles.header, { color: colorScheme?.text_header }]}>{header}</Text>
      <Text style={[styles.info, { color: colorScheme?.text_info }]}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    paddingTop: 10,
  },
  info: {
    textAlign: "center",
    paddingBottom: 10,
  }
});
