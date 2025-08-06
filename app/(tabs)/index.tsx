import SearchBar from "@/components/SearchBar";
import ShoeCard from "@/components/ShoeCard";
import { icons } from "@/constants/icons";
import { ShoeData } from "@/Data/ShoeData";
import { useRouter } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const handlePress = (id: number) => {
    // console.log("Klik item dengan id:", id);
    router.push(`/detail/${id}`)
  };
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
          <FlatList
            // horizontal
            scrollEnabled={false}
            data={ShoeData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-evenly",
              marginBottom: 16,
            }}
            renderItem={({ item }) => (
              <ShoeCard item={item} onPress={handlePress} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
