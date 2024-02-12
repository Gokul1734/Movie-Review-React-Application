import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { Navigation } from "react-native-navigation";
var { width, height } = Dimensions.get("window");
export default function MovieList({ title, data, hidden }) {
  let movieName = "Master";
  const navigation = useNavigation();
  return (
    <View className="mb-8 mt-4 ml-3 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl font-bold">{title}</Text>
        <TouchableOpacity>
          {hidden ? (
            <Text className="text-white"></Text>
          ) : (
            <Text className="text-white">See All</Text>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                  source={require("../assets/images/upcoming.jpg")}
                />
                <Text className="text-white">
                  {movieName.length > 12
                    ? movieName.slice(0, 12) + "..."
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
