import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CreateProductScreen from "./screens/CreateProductScreen";
import DeleteProductScreen from "./screens/DeleteProductScreen";
import FeedbackScreen from "./screens/FeedbackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen
          name="CreateProduct"
          component={CreateProductScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="DeleteProduct"
          component={DeleteProductScreen}
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{
            presentation: "fullScreenModal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "red",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
