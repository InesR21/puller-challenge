import {
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/mini";
import { formatCurrency, getBackgroundColor, getTextColor } from "../utils";

const { height } = Dimensions.get("window");

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const { product } = useRoute().params;
  if (!product) {
    return (
      <SafeAreaView>
        <View>
          <Text>No hay producto</Text>
        </View>
      </SafeAreaView>
    );
  }
  const price = formatCurrency(product.price);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          height: height,
        }}
      >
        <View style={{ paddingTop: 60, padding: 20 }}>
          <Image
            resizeMode="contain"
            source={{ uri: product.image }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate("Home")}
          >
            <ArrowLeftCircleIcon size={30} color="#2d3748" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                ALignItems: "center",
              }}
            >
              <Text
                numberOfLines={2}
                style={{ fontSize: 20, flexBasis: "70%" }}
              >
                {product.title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  flexBasis: "30%",
                  textAlign: "right",
                }}
              >
                {price}
              </Text>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Descripción
              </Text>
              <Text
                style={{ fontSize: 16, marginTop: 10, textAlign: "justify" }}
              >
                {product.description}
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Categoría
                </Text>
                <View
                  style={{
                    paddingVertical: 4,
                    marginVertical: 8,
                    width: "30%",
                    borderRadius: 5,
                    justifyContent: "center",
                    backgroundColor: getBackgroundColor(product.category),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      textAlign: "center",
                      color: getTextColor(product.category),
                    }}
                  >
                    {product.category}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#feebc8",
                padding: 10,
                borderRadius: 5,
                width: "48%",
              }}
              onPress={() =>
                navigation.navigate("CreateProduct", { product: product })
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
                Editar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#fed7d7",
                padding: 10,
                borderRadius: 5,
                width: "48%",
              }}
              onPress={() =>
                navigation.navigate("DeleteProduct", { product: product })
              }
            >
              <Text
                style={{
                  color: "#9b2c2c",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Eliminar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 10,
  },
});

export default ProductDetailScreen;
