import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/CustomButton";
import GoogleButton from "@/components/GoogleButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const userDetails = {
    email: email,
    password: password,
  };
  const signIn = () => {
    // console.log(userDetails);
  };

  return (
    <SafeAreaView>
      <View className="px-4">
        <View className="flex-row gap-3 items-center justify-between mt-4">
          <View className="rotate-180">
            <MaterialIcons name="exit-to-app" size={24} color="white" />
          </View>
          <View>
            <ThemedText className="text-white text-3xl" type="subtitle">
              Sign In
            </ThemedText>
          </View>
          <View>
            <Link href={"/"}>
              <ThemedText className="text-[#5DB075] text-base font-medium">
                Sign Up
              </ThemedText>
            </Link>
          </View>
        </View>
        <View className="mt-10" />

        <View className="mt-8 mb-4 mx-6 flex-row items-center justify-end">
          <TextInput
            style={styles.font}
            placeholder="Email"
            placeholderTextColor={"#B6BBC4"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType="emailAddress"
            className="border flex absolute w-full bg-[#333]  text-[#fff] border-[#B6BBC4] rounded-lg p-3 text-base"
          />
          <View className="mx-4">
            <MaterialIcons name="email" size={24} color="#B6BBC4" />
          </View>
        </View>
        <View className="mt-8 mb-4 mx-6 flex-row items-center justify-end">
          <TextInput
            style={styles.font}
            secureTextEntry={!showPassword}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={"#B6BBC4"}
            textContentType="password"
            className="border flex absolute w-full bg-[#333]  text-[#fff] border-[#B6BBC4] rounded-lg p-3 text-base"
          />
          <TouchableOpacity className="mx-4" onPress={togglePassword}>
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#B6BBC4"
            />
          </TouchableOpacity>
        </View>
        <View className="mt-6 mb-3 mx-6 flex-row items-center justify-center">
          <CustomButton title="Sign In" onPress={signIn} />
        </View>
        <View className="mt-6 mb-4 mx-6 flex-row items-center justify-center">
          <ThemedText>OR</ThemedText>
        </View>
        <View className="mt-6 mb-4 mx-6 flex-row items-center justify-center">
          <GoogleButton text="Sign In" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "InterRegular",
  },
});
