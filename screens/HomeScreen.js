import { View, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/product-service";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import CreateProductIcon from "../components/CreateProductIcon";
import Loading from "../components/Loading";
import Constants from "expo-constants";
import { useProducts } from "../hooks/useProducts";
import { useFilter } from "../hooks/useFilter";

const HomeScreen = () => {
  const { products, productBackup, loading, setProducts } = useProducts();
  const { setSearchValue, seeFilters, setSeeFilters, handleFilter } = useFilter(
    setProducts,
    productBackup
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CreateProductIcon />
      <SafeAreaView style={styles.container}>
        <View>
          <SearchBar
            search={(value) => setSearchValue(value)}
            setSeeFilters={setSeeFilters}
            seeFilters={seeFilters}
          />
        </View>
        {seeFilters ? (
          <View>
            <Categories filterByCategory={handleFilter} />
          </View>
        ) : null}
        <View style={{ paddingBottom: 40 }}>
          <ProductList products={products} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: Constants.statusBarHeight + 10,
  },
});

export default HomeScreen;
