import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { postProduct, putProduct } from "../api/product-service";
import Loading from "../components/Loading";
import { useForm, Controller } from "react-hook-form";

const CreateProductScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productCreated, setProductCreated] = useState({});
  const updateProduct = useRoute()?.params?.product;
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      image: "https://i.pravatar.cc",
      id: 155455,
    },
  });
  const handleCreateProduct = async (data) => {
    setLoading(true);
    let responde;
    if (updateProduct) {
      responde = await putProduct(data.id, data);
    } else {
      responde = await postProduct(data);
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
      setValue("title", updateProduct.title);
      setValue("price", updateProduct.price.toString());
      setValue("description", updateProduct.description);
      setValue("category", updateProduct.category);
      setValue("image", updateProduct.image);
      setValue("id", updateProduct.id);
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
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            color: "#2c5282",
            fontSize: 15,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {updateProduct ? "Update" : "Add New"} Product 🚀
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              maxLength={50}
              keyboardType="default"
              style={styles.input}
              placeholder="Product title"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="title"
        />
        {errors.title && (
          <Text
            style={{ color: "red", fontWeight: "600", paddingHorizontal: 5 }}
          >
            This is required.
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              maxLength={50}
              keyboardType="default"
              style={styles.input}
              placeholder="Product price"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="price"
        />
        {errors.price && (
          <Text style={{ color: "red", fontWeight: "600" }}>
            This is required.
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              maxLength={50}
              keyboardType="default"
              style={styles.input}
              placeholder="Product Description"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="description"
        />
        {errors.description && (
          <Text style={{ color: "red", fontWeight: "600" }}>
            This is required.
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              maxLength={50}
              keyboardType="default"
              style={styles.input}
              placeholder="Product category"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="category"
        />
        {errors.category && (
          <Text style={{ color: "red", fontWeight: "600" }}>
            This is required.
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={handleSubmit(handleCreateProduct)}
      >
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
