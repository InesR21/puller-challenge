import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CreateProductIcon = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 40,
        zIndex: 50,
        width: "100%",
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("CreateProduct")}
      >
        <View
          style={{
            backgroundColor: "#bee3f8",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#2c5282",
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProductIcon;
