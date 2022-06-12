import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
// run "npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs" in terminal

function GetfoodScreen() {
  const navigation = useNavigation();
//Home page
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor: "#D3EBCD", }}>
      <Text >Home</Text>
      <Button
        title="Order Food"
        onPress={() => {
          navigation.navigate("OrderFood.js");
        }}
      />
    </View>
  );
}

function GetfoodScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <text>Getfoodscreen</text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsScreen} />
      <Stack.Screen name="EventsSecondScreen" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}