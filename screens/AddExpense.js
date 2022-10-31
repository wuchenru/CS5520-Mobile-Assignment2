import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState } from "react";
import MyInput from "../components/MyInput";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { writeToDB } from "../firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [important, setImportant] = useState(false);
  const navigation = useNavigation();
  const addExpense = async function ({ amount, description, important }) {
    // update this function to receive newText and adds an object
    //with properties text and key to goals array
    // const newGoal = { text: newText, key: Math.random() };
    // setGoals((prevgoals) => {
    //   return [...prevgoals, newGoal];
    // });
    await writeToDB({
      amount: amount,
      description: description,
      important: important,
    });
  };

  const onSubmit = ({ amount, description, important }) => {
    if (checkNotNull({amount, description})) {
      if (checkValid(amount)) {
        addExpense({ amount, description, important });
        navigation.goBack();
      }
    }

    setAmount("");
    setDescription("");
  };

  const onCancel = () => {
    setAmount("");
    setDescription("");
  };

  const checkNotNull = ({amount, description}) => {
    if (!amount || !description) {
      alert("Cannot add empty expense");
      return false;
    }
    return true;
  };

  const checkValid = (input) => {
    if (isNaN(input)) {
      alert("Amount must be an number");
      return false;
    }
    const num = Number(input);
    if (num < 0) {
      alert("Amount cannot be less than 0");
      return false;
    }
    return true;
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyInput header="Amount" text={amount} setText={setAmount} />
      <MyInput
        header="Description"
        text={description}
        setText={setDescription}
      />
      <View>
        <MyButton buttonName="cancel" onPressed={() => onCancel()} />
        <MyButton
          buttonName="submit"
          onPressed={() => onSubmit({ amount, description, important })}
        />
      </View>
    </View>
  );
}
