import { Text } from "react-native";

import defaultStyle from "../config/styles";

function CustomText({ children, style, ...rest }) {
  return (
    <Text style={[defaultStyle.text, style]} {...rest}>
      {children}
    </Text>
  );
}

export default CustomText;
