import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'nativewind';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SavedScreen from "../screens/SavedScreen";
import SearchScreen from "../screens/SearchScreen";
import SplashScreens from "../screens/SplashScreens";
import WelcomeScreen from "../screens/WelcomeScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";

const Tab=createBottomTabNavigator();
const stack=createNativeStackNavigator();

export default function AppNavigation() {
    const {colorScheme, toggleColorScheme}= useColorScheme();
    const TabNavigator= () => {
        return(
            <Tab.Navigator 
            screenOptions={({route}) => ({
                headerShown:false,
                tabBarIcon:({focused})=>{
                    let iconName;
                    if (route.name==="Home"){
                        iconName="home"
                    } else if(route.name==="Discover"){
                        iconName="compass-outline"
                    } else if(route.name==="Saved"){
                        iconName="bookmark-outline"
                    } else if(route.name==="Search"){
                        iconName="search-outline"
                    }

                    const customizeSize=25;

                    return(
                        <Ionicons 
                        name={iconName}
                        size={customizeSize}
                        color={focused ? "green":"gray"}
                        />
                    );
                },
                tabBarActiveTintColor: "green",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: "SpaceGroteskMedium",
                    // paddingBottom: 10,
                  },
                  tabBarStyle: {
                    backgroundColor: colorScheme == "dark" ? "black" : "white",
                    borderTopWidth: 0,
                    padding: 10,
                    height: 60,
                  },
            })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>            
                <Tab.Screen name="Discover" component={DiscoverScreen}/>            
                <Tab.Screen name="Saved" component={SavedScreen}/>            
                <Tab.Screen name="Search" component={SearchScreen}/>            
    
            </Tab.Navigator>
        );
    };

  return (
    <NavigationContainer>
        <stack.Navigator
        initialRouteName='SplashS'
        screenOptions={
            {headerShown: false}
        }
        >
            <stack.Screen name="SplashS" component= {SplashScreens} />
            <stack.Screen name="Welcome" component= {WelcomeScreen} />
            <stack.Screen name="Search" component= {SearchScreen} />
            <stack.Screen
             name="NewsDetails" 
             component= {NewsDetailsScreen}
             options={{animation:'slide_from_bottom'}} 
            />
            <stack.Screen name="HomeTabs" component={TabNavigator} />
        </stack.Navigator>
    </NavigationContainer>
  );
}
