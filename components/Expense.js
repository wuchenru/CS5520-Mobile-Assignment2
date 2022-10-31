import { View, StyleSheet, Pressable, Text, Button } from "react-native";
import React from "react";
import { COLORS } from "../helper";

export default function Expense({ amount, description, important, onExpensePress}) {
  // function deletePressed() {
  //   onDelete(goal.key);
  // }
  
  return (
    <View style={styles.expenseTextContainer}>
      <Pressable
        onPress={() => {
          onExpensePress();
        }}
        android_ripple={{ color: "#223355", foreground: true }}
        style={(obj) => {
          return obj.pressed && styles.pressedItem;
          //  style={({pressed}) => {
          //   return pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.expenseText}>
          {" "}
          {amount}, {description}, {important}
        </Text>
      </Pressable>
      {/* <DeleteButton onDeletePressed={deletePressed} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  expenseTextContainer: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  expenseText: {
    fontSize: 18,
    color: "#929",
    // backgroundColor:'#aaa',
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#222",
    opacity: 0.5,
  },
});
