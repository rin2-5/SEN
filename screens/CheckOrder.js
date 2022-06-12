import React from "react";
import { Alert } from "react-native"
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  SectionList, 
  StatusBar } from "react-native";

const DATA = [
  { title: "Order #1", data: ["Stall 1: Coffee", "Queue no: 1", "Est. time: 3min"] },
  { title: "Order #2", data: ["Stall 1: Tea", "Queue no: 2", "Est. time: 5min"] },
];

// function foodready() {
//   Alert.alert("Your food is ready!")
// }
// setTimeout(() =>{
//   foodready();
// },10000);

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function CheckOrderScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      renderItem={({ item }) => <Item title={item} />}
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "pink", 
    padding: 15, 
    marginVertical: 0, 
  }, 
  title: {
    fontSize: 20, 
  }, 
  container: {
    flex: 1, 
    paddingTop: StatusBar.currentHeight, 
    marginHorizontal: 16, 
    backgroundColor: "#f7f4e3", 
  }, 
  header: {
    fontSize: 32, 
    color: "#fdfdfd", 
    backgroundColor: "#c10000", 
    marginTop: 15, 
  }, 
});