import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../api/product-service";

const Categories = ({ filterByCategory }) => {
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const backgroundColors = {
    electronics: "#b2f5ea",
    jewelery: "#bee3f8",
    mensClothing: "#e9d8fd",
    womensClothing: "#fed7e2",
    all: "#e1e5e9",
  };

  const getBackgroundColor = (category) => {
    if (category === "men's clothing") {
      category = "mensClothing";
    } else if (category === "women's clothing") {
      category = "womensClothing";
    }
    return backgroundColors[category];
  };

  const textColor = {
    electronics: "#285e61",
    jewelery: "#2c5282",
    mensClothing: "#553c9a",
    womensClothing: "#434190",
    all: "#2d3748",
  };

  const getTextColor = (category) => {
    if (category === "men's clothing") {
      category = "mensClothing";
    } else if (category === "women's clothing") {
      category = "womensClothing";
    }
    return textColor[category];
  };

  const getData = async () => {
    const responde = await getCategories();
    setCategories(["all", ...responde]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
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
    </View>
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
