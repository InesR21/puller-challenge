import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const Loading = () => {
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
        <Animatable.Image
          animation="pulse"
          iterationCount={1}
          source={require("../assets/img/loading.gif")}
          style={{ width: 400, height: 400 }}
        />
      </Text>
    </View>
  );
};

export default Loading;
