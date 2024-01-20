import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)``;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  line-height: ${(props) => props.theme.lineHeights.title};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  line-height: ${(props) => props.theme.lineHeights.copy};
`;

const RestaurantInfoCard = ({ restaurant }) => {
  // const {
  //   name = "some restaurant",
  //   icon,
  //   photos = [
  //     "https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg",
  //   ],
  //   address = "123 abc",
  //   isOpenNow = true,
  //   rating = 4,
  //   isClosedTemporarily = false,
  // } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg",
        }}
      />
      <Info>
        <Title variant="titleMedium">Some Restaurant</Title>
        <Address>123 ABC St. Winona Lake, IN 46590</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
