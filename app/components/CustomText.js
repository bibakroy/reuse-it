import { Text } from "react-native";

import defaultStyle from "../config/styles";

function CustomText({ children, style }) {
  return <Text style={[defaultStyle.text, style]}>{children}</Text>;
}

export default CustomText;
