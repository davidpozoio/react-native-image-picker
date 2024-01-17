import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ text, primary = false, handlePress }) => {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: primary ? "white" : "#2599ff" },
      ]}
      onPress={() => handlePress()}
    >
      <Text style={[styles.text, { color: primary ? "black" : "white" }]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "200px",
    padding: "1px",
    backgroundColor: "#2599ff",
    borderRadius: "20px",
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
});

export default Button;
