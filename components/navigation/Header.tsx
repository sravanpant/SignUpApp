import { ThemedText } from "@/components/ThemedText";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as NavigationBar from "expo-navigation-bar";

export default function Header() {
  return (
    <View className="backdrop-blur  shadow-slate-400">
      <View className="flex-row items-center justify-between mx-2 my-3 p-3 ">
        <TouchableOpacity>
          <Image
            className="w-12 h-12 rounded-full"
            source={{
              uri: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
            }}
          />
        </TouchableOpacity>
        <View className="flex-row items-center justify-around gap-x-8">
          <TouchableOpacity>
            <Ionicons name="file-tray-full-outline" size={31} color="#B6BBC4" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={31} color="#B6BBC4" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              className="w-10 h-10 rounded-full"
              source={{
                uri: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
