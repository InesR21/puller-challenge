import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { postProduct } from "../api/product-service";

const CreateProductScreen = () => {
  const navigation = useNavigation();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "https://i.pravatar.cc",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productCreated, setProductCreated] = useState({});

  const handleCreateProduct = async () => {
    setLoading(true);

    const responde = await postProduct(newProduct);
    if (responde.error) {
      setError(responde.error);
    } else {
      setProductCreated(responde);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
          Creating Product...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
          Error creating product
        </Text>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.button}>
            <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
              Go to Home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else if (productCreated.id) {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: "100%",
            height: "50%",
            resizeMode: "contain",
          }}
          source={{ uri: productCreated.image }}
        />

        <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
          Product created successfully whith id: {productCreated.id}
        </Text>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.button}>
            <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
              Go to Home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
          Add New Product 🚀
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
