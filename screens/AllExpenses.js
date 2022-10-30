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

export default function AllExpenses(navigation) {
  //   const [goals, setGoals] = useState([]);
  //   // goals =[{text:'learn', key:random_number}]

  //   const [modalVisible, setModalVisible] = useState(false);
  //   const onTextAdd = function (newText) {
  //     // update this function to receive newText and adds an object
  //     //with properties text and key to goals array
  //     const newGoal = { text: newText, key: Math.random() };
  //     setGoals((prevgoals) => {
  //       return [...prevgoals, newGoal];
  //     });
  //     setModalVisible(false);
  //   };
  //   const makeModalVisible = () => {
  //     setModalVisible(true);
  //   };
  //   const makeModalInvisible = () => {
  //     setModalVisible(false);
  //   };

  //   function onDelete(deletedKey) {
  //     console.log("delete pressed ", deletedKey);
  //     setGoals(
  //       goals.filter((goal) => {
  //         return goal.key != deletedKey;
  //       })
  //     );
  //   }
  //   function itemPressed(goal) {
  //     console.log("item pressed");
  //     //navigate to GoalDetails.js
  //     navigation.navigate('GoalDetails', {goalObject:goal});
  //   }

  //   const name = "my App";
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <View style={styles.topContainer}>
  //         <Header appName={name} />
  //         <Button title="Add a Goal" onPress={makeModalVisible} />
  //       </View>
  //       <View style={styles.bottomContainer}>
  //         <FlatList
  //           data={goals}
  //           renderItem={({ item }) => {
  //             console.log(item);
  //             return (
  //               <GoalItem
  //                 goal={item}
  //                 onDelete={onDelete}
  //                 onItemPress={itemPressed}
  //               />
  //             );
  //           }}
  //           contentContainerStyle={styles.scrollViewItems}
  //         ></FlatList>
  //       </View>
  //       <Input
  //         modal={modalVisible}
  //         onCancel={makeModalInvisible}
  //         onAdd={onTextAdd}
  //       />
  //       <StatusBar style="auto" />
  //     </SafeAreaView>
  //   );

  return (
    <View>
      <Text>TestAllExpenses;</Text>
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
