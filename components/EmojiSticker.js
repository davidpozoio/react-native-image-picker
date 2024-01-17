import { useState } from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Draggable from "react-native-draggable";

const EmojiSticker = ({ source }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const [xPosition, setXPosition] = useState(0);
  const containerStyle = useAnimatedStyle(() => {
    console.log(translateX.value);
    console.log(xPosition);
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  }, [translateX.value, translateY.value, xPosition]);

  const drag = Gesture.Pan().onChange((event) => {
    console.log("dragging");
    translateX.value += event.translationX;
    translateY.value += event.translationY;
    setXPosition(xPosition + event.changeX);
  });
  return (
    <GestureDetector gesture={drag} style={{ width: "50px", height: "50px" }}>
      <Draggable x={10} y={10} z={10}>
        <Animated.Image
          source={source}
          style={[styles.image]}
          resizeMode="contain"
          gesture={drag}
        ></Animated.Image>
      </Draggable>
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
