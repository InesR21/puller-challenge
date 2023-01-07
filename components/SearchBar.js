import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/mini";

const SearchBar = ({ search, seeFilters, setSeeFilters }) => {
  return (
    <View style={styles.container}>
      <View style={styles.PlaceContainer}>
        <MagnifyingGlassIcon
          style={styles.glassIcon}
          size={20}
          color="#2d3748"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => search(text)}
          placeholder="Search"
          maxLength={50}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity onPress={() => setSeeFilters(!seeFilters)}>
        <AdjustmentsVerticalIcon
          style={styles.adjustmentIcon}
          size={20}
          color="#2d3748"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 5,
    marginBottom: 10,
  },
  PlaceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#e4e6ea",
    borderRadius: 5,
    paddingVertical: 5,
  },
  glassIcon: {
    marginLeft: 8,
  },
  input: {
    marginLeft: 8,
    width: "89%",
  },
  adjustmentIcon: {
    marginLeft: 8,
  },
});

export default SearchBar;
