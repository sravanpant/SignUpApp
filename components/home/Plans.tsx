import { ThemedText } from "@/components/ThemedText";
import { View, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import CardButton from "./CardButton";

export default function Plans() {
  return (
    <View
      className={`px-3 pt-5 flex-row justify-between items-center rounded-3xl `}
    >
      <View className="bg-[#272932]  w-48 h-48 rounded-3xl">
        <View className="px-5 py-3 flex-row items-center justify-between">
          <ThemedText
            type="defaultSemiBold"
            className="uppercase text-[#D8EFD3]"
          >
            Ala Carté
          </ThemedText>
          <TouchableOpacity>
            <Octicons name="arrow-right" size={24} color="#D8EFD3" />
          </TouchableOpacity>
        </View>

        <View className="px-5 py-2">
          <ThemedText type="default" className="px-1 text-[#12CC94] ">
            Star, Zee, Sony, Sun and more
          </ThemedText>
        </View>
        <CardButton text="Add Channels" />
      </View>

      <View className="bg-[#272932] w-48 h-48 rounded-3xl">
        <View className="px-5 py-3 flex-row items-center justify-between">
          <ThemedText
            type="defaultSemiBold"
            className="uppercase text-[#D8EFD3]"
          >
            Bandwidth
          </ThemedText>
          <TouchableOpacity>
            <Octicons name="arrow-right" size={24} color="#D8EFD3" />
          </TouchableOpacity>
        </View>

        <View className="px-5 py-2">
          <ThemedText type="default" className="px-1 text-[#12CC94] ">
            Currently at 100Mbps
          </ThemedText>
        </View>
        <CardButton text="Upgrade Now" />
      </View>
    </View>
  );
}
