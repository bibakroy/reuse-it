import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import CustomText from "../CustomText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <CustomText style={styles.error}>{error}</CustomText>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
