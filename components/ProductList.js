import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import * as Animatable from "react-native-animatable";

const ProductList = ({ products = [] }) => {
  if (!products.length) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: "#2d3748",
            marginBottom: 20,
          }}
        >
          No hay productos
        </Text>
        <Animatable.Image
          animation="pulse"
          iterationCount={1}
          source={require("../assets/img/noFound.gif")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }
  return (
    <View style={{ marginVertical: 5, paddingBottom: 20 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;
