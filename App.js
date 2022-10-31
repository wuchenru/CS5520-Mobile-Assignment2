import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import AddExpense from "./screens/AddExpense";
import EditExpense from "./screens/EditExpense";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="EditExpense" component={EditExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}