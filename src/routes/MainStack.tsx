import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { PostDetailScreen } from "../screens/PostDetailScreen";
import { PostsScreen } from "../screens/PostsScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  PostsScreen: undefined;
  PostDetailScreen: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostsScreen" component={PostsScreen} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
    </Stack.Navigator>
  );
};
