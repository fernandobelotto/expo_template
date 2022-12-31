import React from "react";
import { Text, View } from "react-native";
import { useAppSelector } from "../store";

type Props = {};

export const PostsList = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <View>
      <Text>PostsList</Text>
    </View>
  );
};
