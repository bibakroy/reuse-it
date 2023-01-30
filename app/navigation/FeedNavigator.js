import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LISTING}
        component={ListingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
