import { View, StyleSheet, Pressable, Text, Button } from "react-native";
import React from "react";
import { COLORS } from "../helper";

export default function MyButton({ buttonName, onPressed }) {
  return (
    <Pressable
      onPress={onPressed}
      style={({ pressed }) => {
        return pressed && styles.pressedItm;
      }}
      android_ripple={{ color: "#223355", foreground: true }}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{buttonName}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: COLORS.DARKBLUE,
    margin:10,
    height:60
  },
  pressedItm: {
    opacity: 0.4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: COLORS.WHITE,
  },
});
