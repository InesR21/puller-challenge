import { View, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/product-service";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import CreateProductIcon from "../components/CreateProductIcon";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [productBackup, setProductBackup] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [seeFilters, setSeeFilters] = useState(true);

  const getData = async () => {
    const responde = await getProducts();
    setProducts(responde);
    setProductBackup(responde);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (category) => {
    if (category === "all") {
      setProducts(productBackup);
    } else {
      const filteredProducts = productBackup.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  };

  const handleSearch = () => {
    if (searchValue === "") {
      setProducts(productBackup);
      return;
    }
    const filteredProducts = productBackup.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

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
  },
});

export default HomeScreen;
