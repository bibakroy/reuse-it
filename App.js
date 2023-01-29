import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
