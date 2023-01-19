import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import CustomText from "./CustomText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <TouchableHighlight
      underlayColor={colors.gray_2}
      onPress={() => console.log("")}
    >
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
          <CustomText style={styles.subTitle}>{subTitle}</CustomText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
