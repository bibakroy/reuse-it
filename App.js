import { useState } from "react";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAddImage = (uri) => {
    setImageUris((prevImageUris) => [...prevImageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setImageUris((prevImageUris) =>
      prevImageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}
