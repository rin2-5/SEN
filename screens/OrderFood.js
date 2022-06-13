import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

//Displays the stalls to order from 
function OrderFoodScreen() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Camp: Pulau Tekong</Text>
        <Text style={styles.text}>Order Your Food: </Text>
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

//Pop-up to alert them that they have ordered 
function CookhousePressed() {
  Alert.alert (
  "You are in queue",
  "Thank you for ordering. Please go to Check Order tab for more details.", 
  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
}

//Displays menu for cookhouse, also shows reviews by others 
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
      <Text style={styles.rating}>Overall Rating: ⭐⭐⭐</Text>
      <Text style={styles.review}>{`Lee \n⭐⭐ 21/4/2022 \nThe food too bland leh you shouldn't come here buy food!!`}</Text>
      <Text style={styles.review}>{`Jack \n⭐⭐⭐⭐ 11/6/2022 \nIt was nice, I especially enjoy the meals on Thurs and I feel that the quality of the food has really gone up recently :)`}</Text>
    </View>
  )
}

//Pop-up to alert them that they have payed 
function CanteenPressed() {
  Alert.alert (
  "Payment complete, you are in queue",
  "Thank you for ordering. Please go to Check Order tab for more details.", 
  [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
}

//Displays menu for Drinks Stall, also shows reviews by others 
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
      <Button color={"#c10000"} title="Coffee" onPress={CanteenPressed}></Button>
      <Text></Text>
      <Button color={"#c10000"} title="Tea" onPress={CanteenPressed}></Button>
      <Text>___________________________________________________</Text>
      <Text style={styles.rating}>Overall Rating: ⭐⭐⭐⭐⭐</Text>
      <Text style={styles.review}>{`Rogers \n⭐⭐⭐⭐⭐ 15/1/2022 \nThe drinks aren't bad, the coffee is a must have for those who are tired`}</Text>
    </View>
  );
}

//Displays menu for Food Stall, also shows reviews by others 
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
      <Button color={"#c10000"} title="Chicken Rice" onPress={CanteenPressed}></Button>
      <Text></Text>
      <Button color={"#c10000"} title="Wanton Noodle" onPress={CanteenPressed}></Button>
      <Text>___________________________________________________</Text>
      <Text style={styles.rating}>Overall Rating: ⭐⭐⭐⭐</Text>
      <Text style={styles.review}>{`Jun Kai \n⭐⭐⭐⭐⭐ 26/3/2022 \nThis stall has crispiest wanton noodle I've ever eaten!`}</Text>
      <Text style={styles.review}>{`Albert \n⭐⭐⭐ 17/5/2022 \nThe portion is pitiful, anyone who wants to eat here should just get food from the cookhouse...`}</Text>
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
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#f7f4e3", 
  }, 
  button: {
    fontSize: 20, 
    textAlign: "center", 
    padding: 28, 
    color: "#fdfdfd", 
    backgroundColor: "#c10000", 
    borderRadius: 5, 
    height: 80, 
    width: 250, 
    marginBottom: 15, 
  },
  header: {
    fontSize: 25, 
    margin: 10, 
  }, 
  text: {
    fontSize: 20, 
    paddingBottom: 10, 
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