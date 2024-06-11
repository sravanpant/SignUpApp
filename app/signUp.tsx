import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemedText } from "@/components/ThemedText";
import Checkbox from "expo-checkbox";
import CustomButton from "@/components/CustomButton";
import GoogleButton from "@/components/GoogleButton";

SplashScreen.preventAutoHideAsync();

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const userDetails = {
    name: name,
    email: email,
    password: password,
    promotion: toggleCheckBox,
  };
  const signUp = () => {
    // console.log(userDetails);
  };

  const [fontsLoaded, fontError] = useFonts({
    InterBold: require("../assets/fonts/Inter-Bold.otf"),
    InterBlack: require("../assets/fonts/Inter-Black.otf"),
    InterExtraBold: require("../assets/fonts/Inter-ExtraBold.otf"),
    InterExtraLight: require("../assets/fonts/Inter-ExtraLight.otf"),
    InterLight: require("../assets/fonts/Inter-Light.otf"),
    InterMedium: require("../assets/fonts/Inter-Medium.otf"),
    InterRegular: require("../assets/fonts/Inter-Regular.otf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.otf"),
    InterThin: require("../assets/fonts/Inter-Thin.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView>
      <View className="px-4">
        <View className="flex-row gap-3 items-center justify-between mt-4">
          <View className="rotate-180">
            <MaterialIcons name="exit-to-app" size={24} color="white" />
          </View>
          <View>
            <ThemedText className="text-white text-3xl" type="subtitle">
              Sign Up
            </ThemedText>
          </View>
          <View>
            <Link href={"/signIn"}>
              <ThemedText className="text-[#5DB075] text-base font-medium">
                Login
              </ThemedText>
            </Link>
          </View>
        </View>
        <View className="mt-10" />
        <View className="mt-8 mb-4 mx-6 space-x-4 flex-row items-center justify-end">
          <TextInput
            style={styles.font}
            placeholder="Name"
            placeholderTextColor={"#B6BBC4"}
            value={name}
            onChangeText={setName}
            textContentType="name"
            className="border flex absolute w-full bg-[#333]  text-[#fff] border-[#B6BBC4] rounded-lg p-3 text-base"
          />
          <View className="mx-4">
            <MaterialIcons name="person" size={24} color="#B6BBC4" />
          </View>
        </View>

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
          <CustomButton title="Sign Up" onPress={signUp} />
        </View>

        <View className="mt-6 mb-4 mx-6 flex-row items-center justify-center">
          <ThemedText>OR</ThemedText>
        </View>
        <View className="mt-6 mb-4 mx-6 flex-row items-center justify-center">
          <GoogleButton text="Sign Up" onPress={() => {}} />
        </View>
        <View className="mt-8 mb-4 mx-6 flex-row items-start justify-start">
          <View className="py-1.5">
            <Checkbox
              value={toggleCheckBox}
              onValueChange={setToggleCheckBox}
              color={toggleCheckBox ? "#5DB075" : undefined}
            />
          </View>
          <View className="mx-3">
            <ThemedText className="text-[#B6BBC4] text-base">
              I would like to receive your newsletter and other promotional
              information.
            </ThemedText>
          </View>
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
