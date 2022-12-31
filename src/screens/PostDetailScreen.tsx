import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Container } from "../components/Container";
import { PostForm } from "../components/PostForm";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";
import { useAppSelector } from "../store";

type Props = NativeStackScreenProps<RootStackParamList, "PostDetailScreen">;

export const PostDetailScreen = ({ route }: Props) => {
  const { id } = route.params;
  const { posts } = useAppSelector((state) => state.posts);

  const post = posts.find((post) => post.id === id);

  return (
    <Container>
      <SpacerFixed />
      <PostForm defaultValues={post} />
    </Container>
  );
};
