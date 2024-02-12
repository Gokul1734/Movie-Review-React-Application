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

export default function MovieScreen() {
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const { params: item } = useRoute();
  let movieName = "Leo Das : Badass";
  const [cast, setcast] = useState([1, 2, 3, 4, 5, 6]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    //callmoviedetails
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute mt-7 z-20 w-full flex-row justify-between items-center px-4 ">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className=" m-4 p-1 rounded-xl"
          >
            <ChevronLeftIcon size={30} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleFavourite(!isFavourite);
            }}
            className=" m-4 p-1 rounded-xl mr-6"
          >
            <HeartIcon
              size={30}
              strokeWidth={2.5}
              color={isFavourite ? "red" : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            style={{ width, height: height * 0.55 }}
            source={require("../assets/images/poster.jpg")}
          ></Image>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
        <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
          <Text className="text-white text-center text-3xl font-bold tracking-widest">
            {movieName}
          </Text>
          <Text className="text-neutral-400 font-semibold  text-center text-sm">
            {"Released • 2023 • 178 mins"}
          </Text>
          <Text className="text-neutral-400 font-semibold  text-center text-xs mb-7">
            {"Action • Thriller • Comedy"}
          </Text>
        </View>
        <Text className="text-neutral-400 tracking-wide mx-2 mt-10 m-4 justify-end text-base ">
          {`Leo (also marketed as Leo: Bloody Sweet) is a 2023 Indian Tamil-language action thriller film[5] directed by Lokesh Kanagaraj and produced by Seven Screen Studio. The film stars Vijay in the titular role, alongside Sanjay Dutt, Arjun, Trisha, Gautham Vasudev Menon, Mysskin, Madonna Sebastian, George Maryan, Mansoor Ali Khan, Priya Anand and Mathew Thomas. It is the third installment in the Lokesh Cinematic Universe and is inspired by A History of Violence (2005), an adaptation of the graphic novel of the same name. The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo.`}
        </Text>
      </View>
      <Cast cast={cast} />
      <MovieList title={"Similar Movies"} data={similarMovies} hidden={true} />
    </ScrollView>
  );
}
