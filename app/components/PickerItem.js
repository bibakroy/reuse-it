import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import CustomText from "./CustomText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomText style={styles.text}>{label}</CustomText>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});