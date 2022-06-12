import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// run "npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs" in terminal
// run "expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view"
import OrderFoodScreen from "./OrderFood"
import CheckOrderScreen from "./CheckOrder";
import ReviewScreen from "./Review";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Order Food" 
        component={OrderFoodScreen} 
        options={{ headerShown: false }} 
        />
        <Tab.Screen 
        name="Check Order" 
        component={CheckOrderScreen} 
        options={{
          headerTitleStyle: {
              fontSize: 33, 
              color: "#fdfdfd",
              fontWeight: "bold", 
          },
          headerStyle: {
              height: 90, 
              backgroundColor: "#c10000", 
          }
      }}
        />
        <Tab.Screen 
        name="Review"
        component={ReviewScreen}
        options={{
          headerTitleStyle: {
              fontSize: 33, 
              color: "#fdfdfd",
              fontWeight: "bold", 
          },
          headerStyle: {
              height: 90, 
              backgroundColor: "#c10000", 
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}