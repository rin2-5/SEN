import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  SectionList, 
  StatusBar } from "react-native";

const DATA = [
  { title: "Order #1", data: ["Stall 1: Coffee", "Queue no: 1", "Est. time: 5min"] },
  { title: "Order #1", data: ["Stall 1: Coffee", "Queue no: 1", "Est. time: 5min"] },
];

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
    backgroundColor: "#f9c2ff", 
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
  }, 
  header: {
    fontSize: 32, 
    color: "#fdfdfd", 
    backgroundColor: "#c10000", 
    marginTop: 15, 
  }, 
});