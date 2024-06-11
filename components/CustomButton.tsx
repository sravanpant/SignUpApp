import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";
import { Link } from "expo-router";

export type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <Link
      href={"/(tabs)/"}
      className="w-full flex text-center p-4 bg-[#5db075] rounded-full"
    >
      <TouchableOpacity onPress={onPress} className="">
        <Link href={"/(tabs)/"}>
          <ThemedText
            type="defaultSemiBold"
            className="text-[#1F1F1F] mx-4 flex items-center text-lg space-y-1"
          >
            {title}
          </ThemedText>
        </Link>
      </TouchableOpacity>
    </Link>
  );
}
