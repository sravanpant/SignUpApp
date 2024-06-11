import { Link } from "expo-router";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-white ">Hello World!</Text>
      <View className="m-10">
        <Link href={"/"}>
          <Text className="text-white text-2xl font-bold">Sign Out</Text>
        </Link>
      </View>
    </View>
  );
}
