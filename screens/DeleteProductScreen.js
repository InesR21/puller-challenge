import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation, useRoute } from "@react-navigation/native";
import Loading from "../components/Loading";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

const DeleteProductScreen = () => {
  const { product } = useRoute()?.params;
  const navigation = useNavigation();
  const { loading, error, productDeleted, handleDeleteProduct } =
    useDeleteProduct();

  useEffect(() => {
    if (error) {
      navigation.navigate("Feedback", {
        error: error,
        typeOperation: "Delete",
      });
    } else if (Object.keys(productDeleted).length > 0) {
      navigation.navigate("Feedback", {
        product: productDeleted,
        typeOperation: "Delete",
      });
    }
  }, [error, productDeleted]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Animatable.Image
        animation="slideInUp"
        iterationCount={1}
        source={require("../assets/img/deleting.gif")}
        style={{ width: 300, height: 300 }}
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          color: "#9b2c2c",
          fontSize: 20,
          fontWeight: "600",
          marginTop: 20,
        }}
      >
        Are you sure?
      </Animatable.Text>
      <Animatable.View
        animation="slideInUp"
        iterationCount={1}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fed7d7",
            padding: 10,
            borderRadius: 5,
            width: "45%",
          }}
          onPress={() => handleDeleteProduct(product.id)}
        >
          <Text
            style={{
              color: "#9b2c2c",
              textAlign: "center",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#feebc8",
            padding: 10,
            borderRadius: 5,
            width: "45%",
          }}
          onPress={() =>
            navigation.navigate("ProductDetail", { product: product })
          }
        >
          <Text
            style={{
              color: "#9C4222",
              textAlign: "center",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            No
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default DeleteProductScreen;
