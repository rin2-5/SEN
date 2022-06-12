import React from "react";
import { Text, View } from "react-native";
import UserFeedback, { Number, numberRating, setNumberRating, Star } from "react-native-user-feedback";

export default function ReviewScreen() {
  return (
    <View>
      <UserFeedback 
      maxNumber={5} 
      rating={numberRating} 
      onRatingChanged={setNumberRating} 
      renderRating={Star} 
      />
    </View>
  );
};