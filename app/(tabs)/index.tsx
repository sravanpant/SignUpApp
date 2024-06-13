import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Renewal from "@/components/home/Renewal";
import Bill from "@/components/home/Bill";
import Plans from "@/components/home/Plans";
import Header from "@/components/navigation/Header";
import { useRef } from "react";
import Welcome from "@/components/home/Welcome";
import Complaints from "@/components/home/Complaints";

export default function HomeScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Welcome />
        <Renewal />
        <Bill />
        <Plans />
        <Complaints />
        <View className="h-40" />
      </ScrollView>
    </SafeAreaView>
  );
}
