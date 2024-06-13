import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

type cardButtonProps = {
  text: string;
};

const CardButton = ({ text }: cardButtonProps) => {
  return (
    <TouchableOpacity>
      <View className="bg-[#334257] mx-5 my-3 rounded-2xl">
        <ThemedText type="defaultSemiBold" className="text-center py-3 ">
          {text}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;
