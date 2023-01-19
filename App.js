import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My settings"
        ImageComponent={
          <Icon name="email" bgColor="red" iconColor={colors.white} />
        }
      />
    </Screen>
  );
}
