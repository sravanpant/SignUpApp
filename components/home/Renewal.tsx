import { ThemedText } from "@/components/ThemedText";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import RenewButton from "./RenewButton";

export default function Renewal() {
  return (
    <View>
      <View className="my-2 mx-3 px-3 py-3 flex-row justify-between items-center rounded-2xl bg-[#121316]">
        <View className="mx-2">
          <ThemedText type="defaultSemiBold" className="uppercase">
            Cable Renewal: 12-07-2024
          </ThemedText>
        </View>
        <RenewButton />
      </View>
      <View className="my-2 mx-3 px-3 py-3 flex-row justify-between items-center rounded-2xl bg-[#121316]">
        <View>
          <ThemedText type="defaultSemiBold" className="uppercase">
            Internet Renewal: 12-02-2025
          </ThemedText>
        </View>
        <RenewButton />
      </View>
    </View>
  );
}
