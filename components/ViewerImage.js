import { StyleSheet, Image } from "react-native";

const ViewerImage = ({ source }) => {
  return <Image source={source} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    zIndex: "-1",
  },
});

export default ViewerImage;
