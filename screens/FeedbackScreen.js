import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const FeedbackScreen = () => {
  const { product, error, typeOperation } = useRoute()?.params;
  const navigation = useNavigation();
  if (error) {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
          Error {typeOperation} product
        </Text>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={{
              backgroundColor: "#bee3f8",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 15,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
              Go to Home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else if (product?.id) {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "50%",
            resizeMode: "contain",
          }}
          source={{ uri: product.image }}
        />

        <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
          Product {typeOperation} successfully whith id: {product.id}
        </Text>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={{
              backgroundColor: "#bee3f8",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 15,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#2c5282", fontSize: 15, fontWeight: "600" }}>
              Go to Home
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

export default FeedbackScreen;
