import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ViewerImage from "./components/ViewerImage";
import Button from "./components/Button";
import { useRef, useState } from "react";
import EmojiOptions from "./components/EmojiOptions";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

const imageSource = require("./assets/background-image.jpg");

export default function App() {
  const [image, setImage] = useState(imageSource);
  const [showOptions, setShowOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();

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

  return (
    <View style={[styles.container]}>
      {emoji && <EmojiSticker source={emoji} />}
      <View ref={imageRef} collapsable={false} style={{ zIndex: -1 }}>
        <ViewerImage source={image} />
      </View>
      {showOptions ? (
        <>
          <EmojiOptions
            addSticker={() => setShowEmojiPicker(true)}
            save={() => onSaveImageAsync()}
            onReset={() => setEmoji(null)}
          />
          <EmojiPicker
            isVisible={showEmojiPicker}
            onClose={() => setShowEmojiPicker(false)}
          >
            <EmojiList
              onSelect={(item) => {
                console.log(item);
                setEmoji(item);
              }}
              onCloseModal={() => setShowEmojiPicker(false)}
            />
          </EmojiPicker>
        </>
      ) : (
        <>
          <Button text="choose an image" handlePress={pickImage} />
          <Button
            text="use this photo"
            primary={true}
            handlePress={() => setShowOptions(true)}
          />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
