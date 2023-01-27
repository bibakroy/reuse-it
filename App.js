import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
