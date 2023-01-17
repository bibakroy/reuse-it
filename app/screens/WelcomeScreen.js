import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1594731804139-d70328c07f4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        width: 300,
        height: 500,
      }}
      style={style.background}
    >
      <View style={style.logoContainer}>
        {/* <Image source={require("../assets/logo.png")} style={style.logo} /> */}
        <Image
          source={{
            uri: "https://e7.pngegg.com/pngimages/390/565/png-clipart-recycle-logo-recycling-symbol-green-miscellaneous-symbols-thumbnail.png",
            width: 50,
            height: 50,
          }}
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
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
