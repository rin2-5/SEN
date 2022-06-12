import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// run "npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs" in terminal
// run "expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view"
import OrderFoodScreen from "./OrderFood"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Order Food" 
        options={{ headerShown: false }}
        component={OrderFoodScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}