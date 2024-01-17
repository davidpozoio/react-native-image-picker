import { StyleSheet } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import useEmojiSticker from "../hooks/useEmojiSticker";

const EmojiSticker = ({ source }) => {
  const { containerStyle, drag } = useEmojiSticker();
  return (
    <GestureDetector gesture={drag} style={{ width: "50px", height: "50px" }}>
      <Animated.Image
        source={source}
        style={[containerStyle, styles.image]}
        resizeMode="contain"
        gesture={drag}
      ></Animated.Image>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    zIndex: "10",
    top: "100px",
    width: "50px",
    height: "50px",
  },
});

export default EmojiSticker;
