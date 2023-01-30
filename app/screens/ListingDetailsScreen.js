import { Image, StyleSheet, View } from "react-native";

import CustomText from "../components/CustomText";
import ListItem from "../components/list/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{listing.title}</CustomText>
        <CustomText style={styles.price}>${listing.price}</CustomText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/seller.jpg")}
            title="Kror Breed"
            subTitle="5 Listing"
            onPress={() => console.log("")}
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
