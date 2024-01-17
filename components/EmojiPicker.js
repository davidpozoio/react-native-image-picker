import { Modal, Pressable, View, Text, StyleSheet } from "react-native";

const EmojiPicker = ({ isVisible, children, onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View>
          <Text>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <Text>x</Text>
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "25%",
  },
});

export default EmojiPicker;
