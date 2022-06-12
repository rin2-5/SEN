import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function OrderFoodScreen() {
    const navigation = useNavigation();

    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#f7f4e3"
        }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Cookhouse (non-Muslim food)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Cookhouse (Muslim food)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Stall 1: Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Stall 1: Tea</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Stall 2: Chicken Rice</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Payment"); }}>
            <Text style={styles.button}>Stall 2: Wanton noodle</Text>
        </TouchableOpacity>
      </View>
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
        }}
      >
        <Text>Pay for your food!!</Text>
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
      marginBottom: 10, 
      padding: 10, 
      backgroundColor: "#c10000", 
      borderRadius: 5, 
      width: 300, 
    },
  });