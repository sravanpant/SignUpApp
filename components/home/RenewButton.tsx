import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

const RenewButton = () => {
  return (
    <TouchableOpacity>
      <View className="flex-row justify-between items-center rounded-xl py-2 px-2 bg-red-700">
        <ThemedText type="defaultSemiBold" className="px-2 uppercase text-red-200 ">
          Renew
        </ThemedText>
        <Ionicons name="chevron-forward" size={24} color="#FECACA" />
      </View>
    </TouchableOpacity>
  );
};

export default RenewButton;
