import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import UserFeedback, { Number, numberRating, setNumberRating, Star } from "react-native-user-feedback";

export default function ReviewScreen() {
  const [defaultRating, setDefaultRating] = useState(2)
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity 
              activeOpacity={0.7} 
              key={item}
              onPress={() => setDefaultRating(item)}
              >
                <Image 
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                  ? {uri: starImgFilled}
                  : {uri: starImgCorner}
                }/>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <View>
      <CustomRatingBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10, 
    justifyContent: "center", 
  }, 
  textStyle: {
    textAlign: "center", 
    fontSize: 23, 
  }, 
  customRatingBarStyle: {
    justifyContent: "center", 
    flexDirection: "row", 
    marginTop: 30, 
  }, 
  starImgStyle: {
    width: 40, 
    height: 40, 
    resizeMode: "cover", 
  }
})