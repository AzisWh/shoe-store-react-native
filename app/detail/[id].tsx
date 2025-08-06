import { icons } from "@/constants/icons";
import { DetailShow } from "@/Data/ShoeDetail";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ShoeDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const data = DetailShow.find((item) => item.id === Number(id));

  if (!data) {
    return (
      <View className="items-center justify-center flex-1 bg-white">
        <Text className="text-lg font-bold text-red-500">Shoe not found</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 " style={{ backgroundColor: data.bg }}>
      <ScrollView className="flex-1 ">
        <View
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: 150,
            backgroundColor: "white",
            opacity: 0.3,
            top: "13%",
            alignSelf: "center",
          }}
        ></View>
        <View className="flex flex-row justify-between  mt-[50px] px-5">
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={icons.leftarrow}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image source={icons.hamburger} />
        </View>
        <View className="flex items-center justify-center w-full mt-10">
          <Image
            source={data.image}
            className="mt-10"
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View
          className="w-full h-full bg-white "
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View className="flex flex-col px-5 mt-10">
            <View className="flex flex-row justify-between">
              <View className="flex flex-col">
                <Text className="text-2xl font-medium text-black">
                  {data.name}
                </Text>
                <Text className="text-lg font-light gray-500">1 Pair</Text>
              </View>
              <Text className="mt-8 text-lg font-medium text-black">
                ${data.price}.00
              </Text>
            </View>
            <View className="flex flex-col mt-10">
              <Text className="text-lg font-medium text-black">
                Product Description
              </Text>
              <Text className="mt-5 text-sm font-medium text-black">
                {data.desc}
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between px-5 mt-[150px]">
            <View className="p-3 border-2 border-blue-500 rounded-lg">
              <Image
                source={icons.love}
                tintColor="#08A6FF"
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity className="w-1/2 rounded-lg bg-primaryblue">
              <Text className="mt-4 font-semibold text-center text-white">
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShoeDetail;

// const styles = StyleSheet.create({});
