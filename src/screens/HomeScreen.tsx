import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import { Container } from "../components/Container";
import Heading from "../components/Heading";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <SpacerFixed />
      <Heading>HomeScreen</Heading>
      <SpacerFixed />

      <Button
        title="Go to PostsScreen"
        onPress={() => navigation.navigate("PostsScreen")}
      />
    </Container>
  );
};
