import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import Expense from "./Expense";

export default function ExpenseList({expenses, onExpensePress}) {
  return (
    // <View style={styles.expenseTextContainer}>
    //     <Pressable
    //         onPress={() => onExpensePress(expense) }

    //     >

    //     </Pressable>

    // </View>
    <View style={styles.bottomContainer}>
      <FlatList
        data={expenses}
        renderItem={({ expense }) => {
          // console.log(item);
          if(expense === null) return;
          return <Expense amount={expense.amount} description={expense.description} important={expense.description} onExpensePress={onExpensePress} />;
        }}
        contentContainerStyle={styles.scrollViewItems}
      ></FlatList>
    </View>
  );
}

// export default function GoalItem({ goal, onDelete, onItemPress }) {
//   function itemPressed() {
//     alert("you have pressed the item");
//   }
//   return (
//     <View style={styles.goalTextContainer}>
//       <Pressable
//         onPress={() => {
//           onItemPress(goal);
//         }}
//         android_ripple={{ color: "#223355", foreground: true }}
//         style={(obj) => {
//           return obj.pressed && styles.pressedItem;
//           //  style={({pressed}) => {
//           //   return pressed && styles.pressedItem;
//         }}
//       >
//         <Text style={styles.goalText}> {goal.text} </Text>
//       </Pressable>
//       <DeleteButton onDeletePressed={deletePressed} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  expenseTextContainer: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  expenseText: {
    fontSize: 18,
    color: "#929",
    // backgroundColor:'#aaa',
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#222",
    opacity: 0.5,
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "pink",
  },
});
