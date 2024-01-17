import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ViewerImage from "./components/ViewerImage";
import Button from "./components/Button";
import { useState } from "react";
import EmojiOptions from "./components/EmojiOptions";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";

import useImagePicker from "./hooks/useImagePicker";
import useSaveImage from "./hooks/useSaveImage";

export default function App() {
  const { image, pickImage } = useImagePicker();
  const [showOptions, setShowOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const { imageRef, onSaveImageAsync } = useSaveImage();

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
