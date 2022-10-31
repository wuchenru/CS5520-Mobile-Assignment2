import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
        <Stack.Screen name="AddExpense" component={AddExpense} options={{headerTitle:'Add Expense'}} />
        <Stack.Screen name="EditExpense" component={EditExpense} options={{headerTitle:'Edit Expense'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}