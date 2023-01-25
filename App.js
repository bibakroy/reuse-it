import { useState } from "react";
import CustomPicker from "./app/components/CustomPicker";
import CustomTextInput from "./app/components/CustomTextInput";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
