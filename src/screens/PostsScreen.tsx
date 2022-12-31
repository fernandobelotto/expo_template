import { FlatList, View } from "react-native";
import React from "react";
import { useAppSelector } from "../store";
import { Container } from "../components/Container";
import { PostForm } from "../components/PostForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/MainStack";
import Heading from "../components/Heading";
import { PostItem } from "./PostItem";
import { SpacerFixed } from "../components/SpacerFixed";

type Props = NativeStackScreenProps<RootStackParamList, "PostsScreen">;

export const PostsScreen = ({ navigation }: Props) => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <Container>
      <View style={{ height: 20 }} />
      <Heading>PostsScreen</Heading>
      <View style={{ height: 20 }} />
      <PostForm />
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <>
              <SpacerFixed />
              <PostItem item={item} navigate={navigation.navigate} />
            </>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};
