import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyle from "../config/styles";

function CustomTextInput({ icon, ...rest }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.gray_1}
          style={styles.icon}
        />
      )}
      <TextInput
        {...rest}
        placeholderTextColor={colors.gray_1}
        style={[defaultStyle.text, styles.textInput]}
      />
    </View>
  );
}

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_2,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    width: "100%",
  },
});
