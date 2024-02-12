import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
var { width, height } = Dimensions.get("window");

export default function Cast({ cast }) {
  let name = "Joseph Vijay";
  let cname = "Parthiban";
  const navigation = useNavigation();
  console.log(cast);
  return (
    <View>
      <Text className="text-white font-bold text-xl m-4">Top Casting</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map(() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Person")}
                className="mr-4 items-center"
              >
                <Image
                  className="rounded-full"
                  style={{ width: width * 0.2, height: height * 0.1 }}
                  source={require("../assets/images/vijay.jpg")}
                ></Image>
                <Text className="text-white">
                  {name.length > 10 ? name.slice(0, 10) + "..." : name}
                </Text>

                <Text className="text-neutral-600">
                  {cname.length > 10 ? cname.slice(0, 10) + "..." : cname}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
