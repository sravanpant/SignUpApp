import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";

export type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-51 flex-row items-center space-x-2 bg-[#5db075] justify-center px-3 py-4 rounded-full "
    >
      <ThemedText
        type="defaultSemiBold"
        className="text-[#1F1F1F] text-lg space-y-1"
      >
        {title}
      </ThemedText>
    </Pressable>
  );
}
