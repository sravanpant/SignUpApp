import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

import { useState } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const imgSource =
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388";
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-row h-[90] items-center justify-between border border-[#222831] mx-2 my-3 p-3 rounded-3xl bg-[#222831]">
          <Image
            className="w-12 h-12 rounded-full"
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
            }}
          />
          <View className="flex-row items-center justify-around gap-x-8">
            <MaterialCommunityIcons
              className=""
              name="history"
              size={40}
              color="#B6BBC4"
            />
            <Octicons name="bell" size={31} color="#B6BBC4" />
            <Image
              className="w-10 h-10 rounded-full"
              source={{ uri: imgSource }}
            />
          </View>
        </View>
        <View className="h-80 border border-[#222831] mx-2 my-3 p-3 rounded-3xl bg-[#222831]"></View>
        <View className="h-80 border border-[#222831] mx-2 my-3 p-3 rounded-3xl bg-[#222831]"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
