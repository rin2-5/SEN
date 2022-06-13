import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderFoodScreen from "./screens/OrderFood";
import CheckOrderScreen from "./screens/CheckOrder";
import ReviewScreen from "./screens/Review";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          //Tab bar icons 
          if (route.name === "Order Food") {
            iconName = "food-fork-drink";
          } else if (route.name === "Check Order") {
            iconName = "shopping";
          } else if (route.name === "Review") {
            iconName = "pencil";
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#fd4d4f",
        tabBarInactiveTintColor: "gray",
      })}>
        {/* Screen tab styles */}
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