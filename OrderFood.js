import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function OrderFoodScreen() {
    const navigation = useNavigation();

    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#D3EBCD"
        }}>
        <Button
          title="Cookhouse (non-Muslim food)"
          onPress={() => { navigation.navigate("PayScreen"); }}/>
        <Button
          title="Cookhouse (Muslim food)"
          onPress={() => { navigation.navigate("PayScreen"); }}/>
        <Button
          title="Stall 1: Coffee"
          onPress={() => { navigation.navigate("PayScreen"); }}/>
        <Button
          title="Stall 1: Tea"
          onPress={() => { navigation.navigate("PayScreen"); }}/>
        <Button
          title="Stall 2: Chicken Rice"
          onPress={() => { navigation.navigate("PayScreen"); }}/>
        <Button
          title="Stall 2: Wanton noodle"
          onPress={() => { navigation.navigate("PayScreen"); }}/>
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
          backgroundColor: "hotpink",
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
        <Stack.Screen name="Order Food" component={OrderFoodScreen} />
        <Stack.Screen name="PayScreen" component={PayScreen} />
      </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });