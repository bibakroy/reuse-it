import { useState } from "react";

import CustomTextInput from "./app/components/CustomTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      {/* <Text>{firstName}</Text> */}
      <CustomTextInput placeholder="Write here..." icon="email" />
    </Screen>
  );
}
