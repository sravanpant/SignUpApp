import * as React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

function Index() {
  const width = Dimensions.get("window").width;
  return (
    <View className="rounded-3xl">
      <Carousel<{ content: string }>
        loop
        width={0.9 * width}
        height={width / 2}
        autoPlay={true}
        data={[
          {
            content: "Cable Renewal: 12-07-2024",
          },
          {
            content: "Internet Renewal: 28-03-2025",
          },
        ]}
        scrollAnimationDuration={5000}
        renderItem={({ item }) => {
          return (
            <View className="mx px-3 py-3 flex-row justify-between items-center rounded-2xl bg-[#394867]">
              <View className="mx-2">
                <ThemedText type="defaultSemiBold" className="uppercase">
                  {item.content}
                </ThemedText>
              </View>
              <TouchableOpacity>
                <View className="flex-row justify-between items-center rounded-xl py-2 px-2 bg-red-500">
                  <ThemedText
                    type="defaultSemiBold"
                    className="px-2 uppercase "
                  >
                    Renew
                  </ThemedText>
                  <Ionicons name="chevron-forward" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Index;
