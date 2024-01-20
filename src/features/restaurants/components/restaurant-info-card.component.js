import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  padding: 8px;
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)``;

const Title = styled.Text`
  padding: 16px 0;
  color: black;
`;

const RestaurantInfoCard = ({ restaurant }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg",
        }}
      />

      <Title variant="titleMedium">Some Restaurant</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
