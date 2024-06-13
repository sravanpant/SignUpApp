import { ThemedText } from "@/components/ThemedText";
import { View, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import CardButton from "./CardButton";

export default function Bill() {
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
            Cable TV
          </ThemedText>
          <TouchableOpacity>
            <Octicons name="arrow-right" size={24} color="#D8EFD3" />
          </TouchableOpacity>
        </View>
        <View className="px-5 py-1 ">
          <ThemedText type="title" className="text-[#D8EFD3]">
            ₹329
          </ThemedText>
        </View>
        <View className="px-5">
          <ThemedText type="default" className="px-1 text-red-300 ">
            bill due
          </ThemedText>
        </View>
        <CardButton text="Auto Pay" />
      </View>

      <View className="bg-[#272932] w-48 h-48 rounded-3xl">
        <View className="px-5 py-3 flex-row items-center justify-between">
          <ThemedText
            type="defaultSemiBold"
            className="uppercase text-[#D8EFD3]"
          >
            Internet
          </ThemedText>
          <TouchableOpacity>
            <Octicons name="arrow-right" size={24} color="#D8EFD3" />
          </TouchableOpacity>
        </View>
        <View className="px-5 py-1 ">
          <ThemedText type="title" className="text-[#D8EFD3]">
            98.79 GB
          </ThemedText>
        </View>
        <View className="px-5">
          <ThemedText type="default" className="px-1 text-[#12CC94] ">
            available data
          </ThemedText>
        </View>
        <CardButton text="Get More Data" />
      </View>
    </View>
  );
}
