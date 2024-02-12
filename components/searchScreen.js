import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import Carousel from "react-native-snap-carousel";
import Trend from "./trendingMovies";
import MovieList from "./movieList";
import { useNavigation } from "@react-navigation/native";

// var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function Search() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-neutral-700 ">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
