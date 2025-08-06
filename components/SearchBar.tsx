import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder?: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View
      className="flex-row items-center px-5 py-4 bg-[#F8F6F6] border  rounded-xl"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 5,
      }}
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#818181"
      />
      <TextInput
        onPress={onPress}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-black"
        placeholder={placeholder}
        placeholderTextColor="#818181"
      />
    </View>
  );
};

export default SearchBar;
