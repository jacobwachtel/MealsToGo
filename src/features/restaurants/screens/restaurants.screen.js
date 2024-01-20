import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";

import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { StatusBar } from "expo-status-bar";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
  background-color: white;
`;

const Search = styled(Searchbar)`
  border-radius: 8px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const restaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <Search
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          elevation={5}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default restaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
