import { View, Text, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "./ProductItem";

const ProductList = ({ products = [] }) => {
  const navigation = useNavigation();
  if (!products.length) {
    return (
      <View>
        <Text>No hay movimientos</Text>
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
