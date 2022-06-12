import React from "react";
import { Text, View } from "react-native";

export default function ReviewScreen() {
    return (
      <View style={{
          flex: 1, 
          padding: 15, 
          justifyContent: "center", 
          backgroundColor: "#f7f4e3", 
        }}>
        <Text>Stall name: </Text>
        <Text>Food: </Text>
        <Text>Review: </Text>
      </View>
    );
}