import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import Cast from "./cast";
import MovieList from "./movieList";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? "" : " my-3";
const size = ios ? "text-s" : "text-base";

export default function Person() {
  const [isFavourite, toggleFavourite] = useState(true);
  const navigation = useNavigation();
  const [actorMovies, setactorMovies] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20, paddingTop: 30 }}
      className="flex-1 bg-neutral-900 w-full"
    >
      <SafeAreaView
        className={
          "flex-row justify-between items-center mx-4 z-10" + verticalMargin
        }
      >
        <TouchableOpacity
          style={(color = "black")}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon size="35" color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <View className="flex-column justify-center items-center">
          <View
            className="rounded-full w-72 h-72 border-solid border-white border-2 overflow-hidden"
            style={{
              shadowColor: "gray",
              shadowRadius: 50,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <Image
              style={{
                width: width * 0.7,
                height: height * 0.52,
                marginRight: 20,
              }}
              source={require("../assets/images/vijay.jpg")}
            ></Image>
          </View>

          <Text className="text-white mt-10 text-center text-bold text-3xl">
            Joseph Vijay
          </Text>
          <Text className="text-neutral-500 mt-1 text-center text-bold  ">
            Chennai, Tamil Nadu
          </Text>
          <View
            className={
              "   py-5 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full" +
              verticalMargin
            }
          >
            <View className="px-3 border-r-2 border-gray-400 items-center">
              <Text className="text-white font-bold ">Gender</Text>
              <Text className="text-neutral-400 mt-0.5">Male</Text>
            </View>
            <View className="px-3 border-r-2 border-gray-400 items-center">
              <Text className="text-white font-bold">Birthday</Text>
              <Text className="text-neutral-400 mt-0.5">22-06-1974</Text>
            </View>
            <View className="px-3 border-r-2 border-gray-400 items-center">
              <Text className="text-white font-bold">Known for</Text>
              <Text className="text-neutral-400 mt-0.5">Acting</Text>
            </View>
            <View className="px-3 items-center">
              <Text className="text-white font-bold">Popularity</Text>
              <Text className="text-neutral-400 mt-0.5">100.0%</Text>
            </View>
          </View>
        </View>
        <View className="my-11 mx-7 ">
          <Text className="text-white font-bold text-xl">Biography</Text>
          <Text
            className={"text-neutral-600 p-3 justify-start text-left" + size}
          >
            Joseph Vijay Chandrasekhar (born 22 June 1974), known mononymously
            as Vijay, is an Indian actor, dancer, playback singer and
            philanthropist who works predominantly in Tamil cinema and also
            appeared in other Indian languages films. Referred to by fans and
            media as "Thalapathy" (commander), Vijay is the highest paid actor
            in Tamil cinema. He has significant fan following globally. He has
            won numerous awards, including eight Vijay Awards by Star India,
            three Tamil Nadu State Film Awards by Government of Tamil Nadu, and
            a SIIMA Award. He has been included several times in the Forbes
            India Celebrity 100 list, based on the earnings of Indian
            celebrities.
          </Text>
        </View>
        <MovieList title={"Movies of Actor"} data={actorMovies} hidden={true} />
      </View>
    </ScrollView>
  );
}
