
import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AllExpenses from "./AllExpenses";
import ImportantExpenses from "./ImportantExpenses";

const Tab = createBottomTabNavigator();
export default function Home({navigation}) {
    return (
      <Tab.Navigator
        initialRouteName="All Expenses"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="All Expenses"
          component={AllExpenses}
          options={{
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="currency-usd"
                color={color}
                size={size}
              />
            ),
            headerRight: () => <Button title="Add" onPress={() => {navigation.navigate("AddExpense")}} />,
          }}
        />
        <Tab.Screen
          name="Important Expenses"
          component={ImportantExpenses}
          options={{
            tabBarLabel: "Important Expenses",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="exclamation"
                color={color}
                size={size}
              />
            ),
            headerRight: () => <Button title="Add" onPress={() => {navigation.navigate("AddExpense")}} />,
          }}
        />
      </Tab.Navigator>
    );
  }