import {
  StyleSheet,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { firestore } from "../firebase/firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";
import ExpenseList from "../components/ExpenseList";
import { COLORS } from "../helper";

export default function ImportantExpenses() {
  const [expenses, setExpenses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "Expenses"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setExpenses([]);
          return;
        }
        setExpenses(
          querySnapshot.docs.map((snapDoc) => {
            let data = snapDoc.data();
            data = { ...data, key: snapDoc.id };
            return data;
          })
        );
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const onExpensePressed = (key) => {
    navigation.navigate("EditExpense", { key: key });
  };
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <ExpenseList
          expenses={expenses.filter((item) => item.important)}
          onExpensePressed={onExpensePressed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.LIGHTBLUE,
  },
});
