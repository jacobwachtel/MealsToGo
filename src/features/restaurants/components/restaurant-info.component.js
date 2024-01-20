import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

const RestaurantInfo = ({ restaurant }) => {
  //   const {
  //     name = "some restaurant",
  //     icon,
  //     photos = [
  //       "https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg",
  //     ],
  //     address = "123 abc",
  //     isOpenNow = true,
  //     rating = 4,
  //     isClosedTemporarily = false,
  //   } = restaurant;

  return (
    <Card elevation={5} style={styles.container}>
      <Card.Cover
        style={styles.cardCover}
        source={{
          uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg",
        }}
      />

      <Text style={styles.cardContent} variant="titleMedium">
        Some Restaurant
      </Text>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  cardCover: {},
  cardContent: {
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
