import { StyleSheet, TouchableOpacity } from "react-native";

import CustomText from "./CustomText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={item.icon} bgColor={item.backgroundColor} size={80} />
      <CustomText style={styles.label}>{item.label}</CustomText>
    </TouchableOpacity>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
