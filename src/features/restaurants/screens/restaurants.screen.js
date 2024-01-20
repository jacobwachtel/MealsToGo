import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";

import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";

const restaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

export default restaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "#ccc",
    borderBottomColor: "black",
    borderBottomWidth: 4,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
