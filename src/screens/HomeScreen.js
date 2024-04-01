import { View, Text, useColorScheme, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { fetchBreakingNews, fetchRecommendedNews } from '../../utils/NewsApi';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Header from '../components/Header';
import MiniHeader from "../components/MiniHeader";
import BreakingNews from '../components/BreakingNews';
import Loading from '../components/Loading';
import NewsSection from '../components/NewsSection';


export default function HomeScreen() {
  const [colorScheme, toggleColorScheme]=useColorScheme();
  const [breakingNews, setBreakingNews]=useState([]);
  const [recommendedNews, setRecommendedNews]=useState([]);
  
  // Breaking News
  const {isLoading: isBreakingLoading } = useQuery({
    queryKey: ["breakingNews"],
    queryFn: fetchBreakingNews,
    onSuccess: (data) => {
      setBreakingNews(data.articles);
    },
    onError: (error) => {
      console.log("Error fetching breaking news", error);
    }
  });

  // Recommended News
  const {isLoading: isRecommendedLoading } = useQuery({
    queryKey: ["recommededNews"],
    queryFn: fetchRecommendedNews,
    onSuccess: (data) => {
      setRecommendedNews(data.articles);
    },
    onError: (error) => {
      console.log("Error fetching recommended news", error);
    }
  });

  return(
    <SafeAreaView className=" flex-1 bg-white dark:bg-neutral-900">
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <Header/>
      {isBreakingLoading ? (
          <Loading />
        ) : (
          <View className="">
            <MiniHeader label="Breaking News" />
            <BreakingNews label={BreakingNews} data={breakingNews} />
          </View>
        )}

        {/* Recommended News */}
        <View>
          <MiniHeader label="Recommended" />
          <ScrollView
            contentContainerStyle={{
              paddingBottom: hp(80),
            }}
          >
            {isRecommendedLoading ? (
              <Loading />
            ) : (
              <NewsSection
                label="Recommendation"
                newsProps={recommendedNews}
              />
              
            )
            }
          </ScrollView>
        </View>
    </SafeAreaView>
  );
}
