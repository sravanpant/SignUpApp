import { View } from "react-native";
import { ThemedText } from "../ThemedText";

const Welcome = () => {
  return (
    <View className="my-2 h-24 z-0 p-3">
      <ThemedText className="text-lg px-2 text-[#7D8592]">
        Welcome back, Elon
      </ThemedText>
      <ThemedText
        type="defaultSemiBold"
        className="text-4xl py-2 px-2 text-[#e8e8e8d0]"
      >
        Dashboard
      </ThemedText>
    </View>
  );
};

export default Welcome;
