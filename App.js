import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} bgColor="red" iconColor={colors.white} />
    </Screen>
  );
}
