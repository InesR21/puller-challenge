import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { postProduct, putProduct } from "../api/product-service";
import * as Animatable from "react-native-animatable";
import Loading from "../components/Loading";

const CreateProductScreen = () => {
  const navigation = useNavigation();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "https://i.pravatar.cc",
    id: 155455,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productCreated, setProductCreated] = useState({});
  const updateProduct = useRoute()?.params?.product;

  const handleCreateProduct = async () => {
    setLoading(true);
    let responde;
    if (updateProduct) {
      responde = await putProduct(newProduct.id, newProduct);
    } else {
      responde = await postProduct(newProduct);
    }
    if (responde.error) {
      setError(responde.error);
    } else {
      setProductCreated(responde);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (updateProduct) {
      setNewProduct({
        title: updateProduct.title,
        price: updateProduct.price.toString(),
        description: updateProduct.description,
        category: updateProduct.category,
        image: updateProduct.image,
        id: updateProduct.id,
      });
    }
  }, [updateProduct]);

  useEffect(() => {
    if (error) {
      navigation.navigate("Feedback", {
        error: error,
        typeOperation: updateProduct ? "Update" : "Create",
      });
    } else if (Object.keys(productCreated).length > 0) {
      navigation.navigate("Feedback", {
        product: productCreated,
        typeOperation: updateProduct ? "Update" : "Create",
      });
    }
  }, [error, productCreated]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
          {updateProduct ? "Update" : "Add New"} Product 🚀
        </Text>
        <TextInput
          maxLength={50}
          keyboardType="default"
          style={styles.input}
          placeholder="Product title"
          onChangeText={(text) => setNewProduct({ ...newProduct, title: text })}
          value={newProduct.title}
        />
        <TextInput
          maxLength={50}
          keyboardType="default"
          style={styles.input}
          placeholder="Product price"
          onChangeText={(text) => setNewProduct({ ...newProduct, price: text })}
          value={newProduct.price}
        />
        <TextInput
          maxLength={50}
          keyboardType="default"
          style={styles.input}
          placeholder="Product Description"
          onChangeText={(text) =>
            setNewProduct({ ...newProduct, description: text })
          }
          value={newProduct.description}
        />
        <TextInput
          maxLength={50}
          keyboardType="default"
          style={styles.input}
          placeholder="Product category"
          onChangeText={(text) =>
            setNewProduct({ ...newProduct, category: text })
          }
          value={newProduct.category}
        />
      </View>
      <TouchableOpacity style={{ width: "100%" }} onPress={handleCreateProduct}>
        <View style={styles.button}>
          <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
            Save
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-evenly",
  },
  input: {
    width: "100%",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#2d3748",
    color: "#2d3748",
  },
  button: {
    backgroundColor: "#bee3f8",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
  },
});

export default CreateProductScreen;
