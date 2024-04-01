import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";


export default function SplashScreens() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }

    setTimeout(() => {
      navigation.navigate("Welcome"); // Navigate to HomeTab
    }, 3000); // 3 seconds delay
  });

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      source={require("/Users/tamannatripathy/newsandroidapp/news/assets/images/welcome/NewsPapers.jpeg")}
      className="flex-1 justify-center items-center"
    >
      <LinearGradient
        colors={["rgba(124, 185, 139, 0.62)", "rgba(124, 185, 139, 0.96)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View onLayout={onLayoutRootView}>
        <Text className="text-white text-3xl font-extrabold uppercase bg-black">
          Stacks news
        </Text>
      </View>
    </ImageBackground>
  );
}