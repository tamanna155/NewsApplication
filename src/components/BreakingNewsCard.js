import {Dimensions, TouchableWithoutFeedback, Image, Text, View} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { fetchBreakingNews } from "../../utils/NewsApi";
import { fetchRecommendedNews } from "../../utils/NewsApi";
  
const { width, height } = Dimensions.get("window");
  
export default function BreakingNewsCard({ item, handleClick }) {
return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
    <View className="relative">
        <Image
        source=
        {{uri: item.urlToImage
        }}
        style={{width: width*0.5,height: height*0.55}}
        resizeMode="cover"
        className="rounded-3xl"
        />
        <LinearGradient
        color={["transparent", "rgba(0,0,0,0.9)"]}
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

        {/* Title and Author */}
        <View className="absolute bottom-6 left-4 justify-end h-[80%]">
        <View className=" space-y-1">
            <View className=" max-w-[98%]">
            <Text className="text-white text-base font-semibold capitalize">
                {item.title.length > 60
                ? item.title.slice(0, 58) + "..."
                : item.title.split("-")[0] || "N/A"}
            </Text>
            </View>

            <View className="">
            <Text className="text-neutral-300 text-sm font-medium">
                {item?.author?.length > 20
                ? item.author.slice(0, 20) + "..."
                : item?.author}
            </Text>
            </View>
        </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
);
}