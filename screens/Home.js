
import * as React from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AllExpenses from "./AllExpenses";
import ImportantExpenses from "./ImportantExpenses";
import { COLORS } from "../helper";
import MyButton from "../components/MyButton";

const Tab = createBottomTabNavigator();
export default function Home({navigation}) {
    return (
      <Tab.Navigator
        initialRouteName="All Expenses"
        screenOptions={{
          tabBarActiveTintColor: COLORS.MAROON,
          headerStyle: {backgroundColor: COLORS.BLUE}, headerTintColor: COLORS.WHITE
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
            headerRight: () => <Button title="Add" onPress={() => {navigation.navigate("AddExpense")}} color={COLORS.WHITE} />,
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
            headerRight: () => <Button title="Add" onPress={() => {navigation.navigate("AddExpense")}} color={COLORS.WHITE} />,
          }}
        />
      </Tab.Navigator>
    );
  }