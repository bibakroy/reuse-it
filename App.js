import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
