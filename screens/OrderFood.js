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
        <TouchableOpacity onPress={() => { navigation.navigate("Queue"); }}>
            <Text style={styles.button}>Cookhouse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Drinks Stall</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Food Stall</Text>
        </TouchableOpacity>
      </View>
    );
  }

function QueuePressed() {
  Alert.alert (
  "You are in queue",
  "Thank you for ordering. Please go to Check Order tab for more details", 
  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
}

function QueueScreen() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f7f4e3",
    }}> 
      <Button color={"#c10000"} title="Queue" onPress={QueuePressed}></Button>
      <Text>this is so there's space between the buttons</Text>
      <Button color={"#c10000"} title="Queue" onPress={QueuePressed}></Button>
    </View>
  )
}

function PayPressed() {
  Alert.alert (
  "Payment complete, you are in queue",
  "Thank you for ordering. Please go to Check Order tab for more details", 
  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
}

function PayScreen() {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f4e3",
      }}>
        <Button color={"#c10000"} title="Payment" onPress={PayPressed}></Button>
        <Text>for space between buttons</Text>
        <Button color={"#c10000"} title="Payment" onPress={PayPressed}></Button>
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
        name="Queue" 
        component={QueueScreen} 
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
        name="Payment" 
        component={PayScreen} 
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
  });