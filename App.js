import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { names } from "./name";

export default function App() {
  //Method 1
  // return (
  //   <View style={styles.container}>
  //     <Text>{names[0]}</Text>
  //     <Text>{names[1]}</Text>
  //     <Text>{names[2]}</Text>
  //     <Text>{names[3]}</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // Method 2 using .map loop
  // return (
  //   <View style={styles.container}>
  //     {names.map((name) => (
  //       <Text>{name}</Text>
  //     ))}
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // Method 2 using scrollview instead of view to be able to scroll
  // return (
  //   <ScrollView contentContainerStyle={styles.container}>
  //     {names.map((name) => {
  //       return <Text key={name}>{name}</Text>;
  //     })}
  //     <StatusBar style="auto" />
  //   </ScrollView>
  // );

  // Method 3 Flat List
  //  names = ['Haris', 'Ali'] -- array of names in name.js

  const namesAsObjects = names.map((item) => {
    return { name: item };
  });
  // namesAsObjects = [{name: 'Haris'},{name:'Ali'}]  -- change it from array to object for rendering flat list
  // item = {name: "Haris"}
  // item.name
  // "Haris"

  const renderName = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <FlatList
      data={namesAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
