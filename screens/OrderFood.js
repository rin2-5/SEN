import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function OrderFoodScreen() {
    const navigation = useNavigation();

    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#f7f4e3", 
        }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Cookhouse"); }}>
            <Text style={styles.button}>Cookhouse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Drinks Stall"); }}>
            <Text style={styles.button}>Drinks Stall</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Food Stall"); }}>
            <Text style={styles.button}>Food Stall</Text>
        </TouchableOpacity>
      </View>
    );
  }

function CookhousePressed() {
  Alert.alert (
  "You are in queue",
  "Thank you for ordering. Please go to Check Order tab for more details", 
  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
}

function CookhouseScreen() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f7f4e3",
    }}> 
      <Button color={"#c10000"} title="Chinese Food" onPress={CookhousePressed}></Button>
      <Text>this is so there's space between the buttons</Text>
      <Button color={"#c10000"} title="Malay Food" onPress={CookhousePressed}></Button>
    </View>
  )
}

function DrinksStallPressed() {
  Alert.alert (
  "Payment complete, you are in queue",
  "Thank you for ordering. Please go to Check Order tab for more details", 
  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
}

function DrinksStallScreen() {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f4e3",
      }}>
        <Text style={styles.text}>Place order for: </Text>
        <Button color={"#c10000"} title="Coffee" onPress={DrinksStallPressed}></Button>
        <Text>for space between buttons</Text>
        <Button color={"#c10000"} title="Tea" onPress={DrinksStallPressed}></Button>
      </View>
    );
  }

  function FoodStallPressed() {
    Alert.alert (
    "Payment complete, you are in queue",
    "Thank you for ordering. Please go to Check Order tab for more details", 
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  }
  
  function FoodStallScreen() {
      return (
        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f4e3",
        }}>
          <Text style={styles.text}>Place order for: </Text>
          <Button color={"#c10000"} title="Chicken Rice" onPress={FoodStallPressed}></Button>
          <Text>for space between buttons</Text>
          <Button color={"#c10000"} title="Wanton Noodle" onPress={FoodStallPressed}></Button>
        </View>
      );
    }  

const Stack = createStackNavigator();
  
export default function OrderFoodStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
        name="Order Your Food" 
        component={OrderFoodScreen} 
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
        <Stack.Screen 
        name="Cookhouse" 
        component={CookhouseScreen} 
        options={{
            headerTintColor: "white", 
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
        <Stack.Screen 
        name="Drinks Stall" 
        component={DrinksStallScreen} 
        options={{
            headerTintColor: "white", 
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
        <Stack.Screen 
        name="Food Stall" 
        component={FoodStallScreen} 
        options={{
            headerTintColor: "white", 
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
      </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    button: {
      fontSize: 20, 
      color: "#fdfdfd", 
      marginBottom: 15, 
      padding: 33, 
      backgroundColor: "#c10000", 
      borderRadius: 5, 
      height: 90, 
      width: 250, 
      textAlign: "center", 
    },
    text: {
      fontSize: 30, 
      justifyContent: "flex-end", 
      flexDirection: "row",
      padding: 15,
    }, 
  });