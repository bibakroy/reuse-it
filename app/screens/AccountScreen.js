import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/list/ListItem";
import ListItemSeparator from "../components/list/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targerScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View>
        <ListItem
          title="Kror Breed"
          subTitle="krowbreed@gmail.com"
          image={require("../assets/seller.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  bgColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targerScreen)}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" bgColor={colors.yellow} />}
      />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.gray_2,
  },
  container: {
    marginVertical: 20,
  },
});
