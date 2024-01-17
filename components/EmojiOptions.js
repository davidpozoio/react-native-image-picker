import Button from "./Button";

const EmojiOptions = ({ onReset, addSticker, save }) => {
  return (
    <>
      <Button text="reset" handlePress={() => onReset()} />
      <Button text="+" handlePress={() => addSticker()} />
      <Button text="save" handlePress={() => save()} />
    </>
  );
};
export default EmojiOptions;
