import { Platform, StyleSheet, Text } from "react-native";

function CustomText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});
