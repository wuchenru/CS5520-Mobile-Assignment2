import {
  View,
  StyleSheet,

  FlatList,
} from "react-native";
import React from "react";
import Expense from "./Expense";
import { COLORS } from "../helper";
export default function ExpenseList({expenses, onExpensePressed}) {
  return (
    <View style={styles.bottomContainer}>
        <FlatList
          data={expenses}
          renderItem={( {item} ) => {
            return (
                <Expense
                amount={item.amount}
                description={item.description}
                important={item.important}
                onExpensePress={() => onExpensePressed(item.key)}
              />
            );
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 4,
  },
});
