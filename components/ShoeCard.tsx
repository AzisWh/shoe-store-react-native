import { icons } from "@/constants/icons";
import { ShoeDataType } from "@/Data/ShoeData";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  item: ShoeDataType;
  onPress?: (id: number) => void;
}

const ShoeCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(item.id)}
      className={`rounded-2xl p-4 w-[140px] h-[250px]`}
      style={{ backgroundColor: item.bg }}
    >
      <View className="flex flex-row justify-between">
        <View className="flex flex-col">
          <Text className="text-base font-bold text-black">{item.name}</Text>
          <Text className="text-base font-medium text-black ">
            {item.overview}
          </Text>
        </View>
        <Image source={icons.checklist} />
      </View>

      <Image
        source={item.image}
        className="absolute w-[150px] h-[150px] left-5 top-10"
        resizeMode="contain"
      />
      <View className="absolute bottom-0 right-0 p-5">
        <Text className="font-semibold">${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShoeCard;
