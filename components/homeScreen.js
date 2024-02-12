import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Carousel from "react-native-snap-carousel";
import Trend from "./trendingMovies";
import MovieList from "./movieList";
import { useNavigation } from "@react-navigation/native";
import Search from "./searchScreen";

// var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const navigation = useNavigation();
  const [trending, setTrending] = useState([1, 2, 3]);
  const [Upcoming, setUpcoming] = useState([1, 2, 3]);
  const [Toprated, setToprated] = useState([1, 2, 3]);
  return (
    <View className="flex-1 bg-black">
      <View className={ios ? "mg-2" : "mg-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mt-11  mx-4">
          <Bars3BottomLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-orange-800 font-bold text-2xl">
            M<Text className="text-white">ovies</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <MagnifyingGlassIcon color={"white"} size="30" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <Trend data={trending}></Trend>
        <MovieList title="Upcoming" data={Upcoming}></MovieList>
        <MovieList title="Top Rated" data={Toprated}></MovieList>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
