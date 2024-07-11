import React from "react";
import { StyleSheet, View, Button } from "react-native";

export const Screen1 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: "#59C9A5" }]}>
    <Button title="Screen 2" onPress={() => navigator.push("Screen2")} />
    <Button title="Pop" onPress={() => navigator.pop()} />
  </View>
);

export const Screen2 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: "#23395B" }]}>
    <Button title="Screen 3" onPress={() => navigator.push("Screen3")} />
    <Button title="Pop" onPress={() => navigator.pop()} />
  </View>
);

export const Screen3 = ({ navigator }) => (
  <View style={[styles.screen, { backgroundColor: "#B9E3C6" }]}>
    <Button title="Pop" onPress={() => navigator.pop()} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
