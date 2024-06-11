import { Pressable } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";
import googleLogo from "../assets/images/google_icon.png";

type googleButtonProps = {
  text: string;
  onPress: () => void;
};

export default function GoogleButton({ text, onPress }: googleButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full flex-row items-center space-x-2  justify-center px-3 py-3.5 rounded-full bg-[#F2F2F2]"
    >
      <Image className="w-8 h-8" source={googleLogo} />
      <ThemedText type="defaultSemiBold" className="text-[#1F1F1F] space-y-1">
        {text} with Google
      </ThemedText>
    </Pressable>
  );
}
