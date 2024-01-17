import { Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const useEmojiSticker = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const containerStyle = useAnimatedStyle(() => {
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
  }, [translateX.value, translateY.value]);

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  return { containerStyle, drag };
};

export default useEmojiSticker;
