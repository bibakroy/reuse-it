import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import CustomText from "./CustomText";

function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.subTitle}>{subTitle}</CustomText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.gray,
  },
});