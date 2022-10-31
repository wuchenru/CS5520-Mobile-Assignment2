import { View, StyleSheet, Pressable, Text, Button } from "react-native";
import React from "react";
import { COLORS } from "../helper";

export default function Expense({
  amount,
  description,
  important,
  onExpensePress,
}) {
  return (
      <Pressable
        onPress={onExpensePress}
        android_ripple={{ color: "#223355", foreground: true }}
        style={(obj) => {
          return [obj.pressed && styles.pressedItem,styles.expenseTextContainer ]
        }}
      >
          <Text style={styles.expenseText}>{description}</Text>
          <View style={styles.expenseAmountContainer}>
          <Text style={styles.expenseAmount}>{amount}</Text>
          </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseTextContainer: {
    flex:1,
    width:400,
    height:60,
    margin: 8,
    padding:10,
    borderRadius: 5,
    backgroundColor: COLORS.DARKBLUE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius:5
  },
  expenseText: {
    fontSize: 18,
    color: COLORS.LIGHTBLUE,
    padding: 8,
  },
  expenseAmountContainer:{
    width:80,
    height:40,
    backgroundColor:COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5
  },
  expenseAmount: {
    color:COLORS.DARKBLUE,
  },
  pressedItem: {
    backgroundColor: "#222",
    opacity: 0.5,
  },
});
