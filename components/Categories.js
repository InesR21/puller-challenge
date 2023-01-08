import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../api/product-service";
import { getBackgroundColor, getTextColor } from "../utils";
import * as Animatable from "react-native-animatable";

const Categories = ({ filterByCategory }) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const responde = await getCategories();
    setCategories(["all", ...responde]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Animatable.View
      animation="slideInDown"
      duration={1000}
      style={styles.container}
    >
      {categories.map((category) => (
        <View
          key={category}
          style={[
            styles.card,
            { backgroundColor: getBackgroundColor(category) },
          ]}
        >
          <TouchableOpacity onPress={() => filterByCategory(category)}>
            <Text style={[styles.text, { color: getTextColor(category) }]}>
              {category}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  card: {
    flex: 1,
    padding: 2,
    margin: 3,
    borderRadius: 5,
    justifyContent: "center",
  },
  text: {
    fontSize: 9,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default Categories;
