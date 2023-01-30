import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="Listing Edit" component={ListingEditScreen} />
      <Tab.Screen name="Account Details" component={AccountNavigator} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
