import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const imageSource = require("../assets/background-image.jpg");

const useImagePicker = () => {
  const [image, setImage] = useState(imageSource);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets[0]);
      setImage(result.assets[0]);
    } else {
      alert("you didn't select any image");
    }
  };

  return { image, pickImage };
};
export default useImagePicker;
