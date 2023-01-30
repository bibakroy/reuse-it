import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
