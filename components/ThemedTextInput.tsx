import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { TextInput, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { cn } from "@/lib/utils";

export type ThemedTextInputProps = {
  placeholder: string;
  placeholderTextColor: string;
  textContentType: any;
  className?: string;
  iconName: any;
  iconColor: string;
};

export default function ThemedTextInput({
  placeholder,
  placeholderTextColor,
  textContentType,
  className,
  iconName,
  iconColor,
}: ThemedTextInputProps) {
  return (
    <View className="mt-8 mb-4 mx-6 space-x-4 flex-row items-center justify-end">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        textContentType={textContentType}
        className={cn(
          "border flex absolute w-full bg-[#333]  text-[#fff] border-[#B6BBC4] rounded-lg p-3 text-base",
          className
        )}
      />
      <View className="mx-4">
        <MaterialIcons name={iconName} size={24} color={iconColor} />
      </View>
    </View>
  );
}
