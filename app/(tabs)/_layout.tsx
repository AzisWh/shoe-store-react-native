import { Tabs } from "expo-router";
import React from "react";

import { icons } from "@/constants/icons";
import { Image, View } from "react-native";

interface Props {
  focused: boolean;
  source: any;
}

const CustomTabBarIcon = ({ focused, source }: Props) => {
  return (
    <View
      className={`items-center justify-center 
        ${focused ? "bg-[#42B1EF] p-6 rounded-full absolute bottom-1 -mb-6" : "mt-10"} `}
    >
      <Image
        source={source}
        className={`${focused ? "w-10 h-10" : "w-6 h-6"}`}
        tintColor={focused ? "#fff" : "#000"}
        resizeMode="contain"
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          height: 70,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOpacity: 0.7,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="analytic"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} source={icons.analytics} />
          ),
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} source={icons.love} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} source={icons.cart} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} source={icons.settings} />
          ),
        }}
      />
    </Tabs>
  );
}
