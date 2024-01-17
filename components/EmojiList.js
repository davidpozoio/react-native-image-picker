import { useState } from "react";
import { FlatList, Pressable, Image, Platform, StyleSheet } from "react-native";

const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    require("../assets/emojis/alien.png"),
    require("../assets/emojis/happyface.png"),
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100px",
    height: "100px",
  },
});

export default EmojiList;
