import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieScreen from "../components/movieScreen";
import HomeScreen from "../components/homeScreen";
import Person from "../components/PersonScreen";
import Search from "../components/searchScreen";
// import HomeScreen from "../components/HomeScreen";
// import MovieScreen from "../components/MovieScreen";
// import PersonScreen from "../components/PersonScreen";
// import SearchScreen from "../components/SearchScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <Stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={Person}
        />
        <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <Stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={PersonScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        /> */
}
