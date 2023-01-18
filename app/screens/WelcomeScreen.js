import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={style.background}
    >
      <View style={style.logoContainer}>
        <Image
          source={require("../../assets/logo-red.png")}
          style={style.logo}
        />
        <Text>Sell What You Don't Need!</Text>
      </View>
      <View style={style.loginButton}></View>
      <View style={style.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
