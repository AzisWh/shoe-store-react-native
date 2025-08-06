import SearchBar from "@/components/SearchBar";
import ShoeCard from "@/components/ShoeCard";
import { icons } from "@/constants/icons";
import { Image, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-row justify-between px-5 mt-[50px]">
        <Image source={icons.leftarrow} />
        <Image source={icons.hamburger} />
      </View>
      <ScrollView
        className="flex-1 px-8 mt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Text className="text-2xl font-bold text-black">Nike Shoe Store</Text>
        <View className="mt-5 ">
          <SearchBar placeholder={"Search for a shoe"} />
        </View>
        <View className="mt-10 ">
          <ShoeCard />
        </View>
      </ScrollView>
    </View>
  );
}
