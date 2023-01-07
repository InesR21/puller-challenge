import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { formatCurrency } from "../utils";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ product }) => {
  const navigation = useNavigation();
  const price = formatCurrency(product.price);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", { product })}
      >
        <View style={styles.imgContainer}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={{ uri: product.image }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={2} style={styles.text1}>
            {product.title}
          </Text>
          <Text style={styles.text2}>{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
  },
  imgContainer: {
    height: 140,
    width: 181,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
  },
  text1: {
    flexBasis: "60%",
    fontSize: 10,
    textAlign: "left",
  },
  text2: {
    flexBasis: "40%",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "right",
  },
});

export default ProductItem;
