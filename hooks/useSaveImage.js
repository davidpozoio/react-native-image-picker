import { useRef } from "react";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

const useSaveImage = () => {
  const imageRef = useRef();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { imageRef, onSaveImageAsync };
};

export default useSaveImage;
