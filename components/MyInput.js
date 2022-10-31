import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../helper";

export default function MyInput({ text, setText, header }) {
  return (
    <View>
      <Text style={styles.text}>{header}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={`Please enter ${header.toLowerCase()}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { marginLeft: 15 },
  input: {
    width: 400,
    color: COLORS.BLUE,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.YELLOW,
    margin: 15,
    fontSize: 20,
    minHeight: 60,
    borderWidth: 2,
    borderColor: COLORS.DARKBLUE,
    borderRadius: 10,
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
});
