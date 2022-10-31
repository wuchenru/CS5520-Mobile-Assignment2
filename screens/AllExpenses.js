import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expense from "../components/Expense";
import { useNavigation } from "@react-navigation/native";
import {
  writeToDB,
  deleteFromDB,
  updateImportanceToDB,
} from "../firebase/firestore";
import { firestore } from "../firebase/firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";
import ExpenseList from "../components/ExpenseList";

export default function AllExpenses() {
  const expensesCollectionRef = collection(firestore, "Expenses");
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

  //alert(expenses);
  // expenses.map((expense) => (alert()));
  const onExpensePressed = (key) => {
    navigation.navigate("EditExpense", { key: key });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <View style={styles.bottomContainer}>
        <ExpenseList expenses={expenses} onExpensePressed={onExpensePressed}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "pink",
  },
  scrollViewItems: {
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    color: "blue",
    padding: 30,
    margin: 30,
  },
  text: { fontSize: 12 },
});
