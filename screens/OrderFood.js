import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Alert, SectionList } from "react-native";
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
        <Text style={styles.header}>Camp: Pulau Tekong</Text>
        <Text style={{fontSize: 20, paddingBottom: 10}}>Order Your Food: </Text>
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
      <Text style={styles.text}>Place order for: </Text>
      <Button margin={5} color={"#c10000"} title="Halal" onPress={CookhousePressed}></Button>
      <Text></Text>
      <Button color={"#c10000"} title="non-Halal" onPress={CookhousePressed}></Button>
      <Text>___________________________________________________</Text>
      <Text style={styles.rating}>Rating: ⭐⭐⭐</Text>
      <Text style={styles.review}>{`Lee \n⭐⭐ 11/6/2022 \nThe food too bland leh you shouldn't come here buy food!!`}</Text>
      <Text style={styles.review}>{`Jack \n⭐⭐⭐⭐ 21/6/2022 \nIt was nice, I especially enjoy the meals on Thurs and I feel that the quality of the food has really gone up recently :)`}</Text>
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
        <Text></Text>
        <Button color={"#c10000"} title="Tea" onPress={DrinksStallPressed}></Button>
        <Text>___________________________________________________</Text>
        <Text style={styles.rating}>Rating: ⭐⭐⭐</Text>
        <Text style={styles.review}>{`Lee \n⭐⭐ 11/6/2022 \nThe food too bland leh you shouldn't come here buy food!!`}</Text>
        <Text style={styles.review}>{`Jack \n⭐⭐⭐⭐ 21/6/2022 \nIt was nice, I especially enjoy the meals on Thurs and I feel that the quality of the food has really gone up recently :)`}</Text>
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
          <Text></Text>
          <Button color={"#c10000"} title="Wanton Noodle" onPress={FoodStallPressed}></Button>
          <Text>___________________________________________________</Text>
          <Text style={styles.rating}>Rating: ⭐⭐⭐</Text>
          <Text style={styles.review}>{`Lee \n⭐⭐ 11/6/2022 \nThe food too bland leh you shouldn't come here buy food!!`}</Text>
          <Text style={styles.review}>{`Jack \n⭐⭐⭐⭐ 21/6/2022 \nIt was nice, I especially enjoy the meals on Thurs and I feel that the quality of the food has really gone up recently :)`}</Text>
        </View>
      );
    }  

const Stack = createStackNavigator();
  
export default function OrderFoodStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
        name="NSQ" 
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
      padding: 28, 
      backgroundColor: "#c10000", 
      borderRadius: 5, 
      height: 80, 
      width: 250, 
      textAlign: "center", 
    },
    header: {
      fontSize: 25, 
      margin: 10, 
    }, 
    text: {
      fontSize: 20, 
      justifyContent: "flex-end", 
      flexDirection: "row",
      padding: 15,
    }, 
    rating: {
      fontSize: 20, 
      padding: 10, 
    }, 
    review: {
      fontSize: 18, 
      paddingBottom: 10, 
    }, 
  });