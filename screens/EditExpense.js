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
import { updateImportanceToDB } from "../firebase/firestore";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { deleteFromDB } from "../firebase/firestore";



export default function EditExpense({route}) {
    const {key} = route.params;
    const navigation = useNavigation();
    const importantPressed = () => {
        Alert.alert(
            "Important",
            "Are you sure you want to mark this as important?",
            [
              {
                text: "No",
                onPress: () => {},
                style: "cancel"
              },
              { text: "Yes", onPress: () => {
                updateImportanceToDB(key);
                navigation.goBack();
              } }
            ]
          )
    }

    const deletePressed = () => {
        Alert.alert(
            "Delete",
            "Are you sure you want to delete this?",
            [
              {
                text: "No",
                onPress: () => {},
                style: "cancel"
              },
              { text: "Yes", onPress: () => {
                deleteFromDB(key);
                navigation.goBack();
              } }
            ]
        )
        
    }
    

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <MyButton buttonName="Mark as important" onPressed={importantPressed}/>
          <MyButton buttonName="Delete" onPressed={deletePressed}/>
        </View>
      );
}