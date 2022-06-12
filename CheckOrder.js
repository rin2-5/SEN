import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function CheckOrderScreen() {
    const navigation = useNavigation();

    return (
      <View style={{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#f7f4e3", 
        }}>
        <Text>Food::</Text>
        <Text>Queue number: </Text>
      </View>
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