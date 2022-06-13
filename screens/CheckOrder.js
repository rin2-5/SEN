import React from "react";
import { Alert } from "react-native"
import { StyleSheet, Text, View, SectionList } from "react-native";

//Data for food ordered 
const DATA = [
  { title: "Order #1", data: ["Stall 1: Coffee", "Queue no: 1", "Est. time: 1min"] },
  { title: "Order #2", data: ["Stall 2: Chicken Rice", "Queue no: 1", "Est. time: 4min"] },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

//Function for alerting when food is done 
function foodready() {
  Alert.alert("Your food is ready!")
}
setTimeout(() => {
  foodready();
}, 60000);

//How the orders are displayed 
export default function CheckOrderScreen() {
  return (
    <View style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      renderItem={({ item }) => <Item title={item} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f7f4e3", 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#eedbc0", 
  }, 
  title: {
    fontSize: 20, 
  }, 
  container: {
    flex: 1, 
    marginHorizontal: 20, 
  }, 
  header: {
    fontSize: 25, 
    color: "#fdfdfd", 
    backgroundColor: "#c10000", 
    marginTop: 25, 
    padding: 10, 
  }, 
});