import React from "react";
import { useForm } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch } from "../store";
import { addPosts } from "../store/slices/posts.slice";
import { PostFormType } from "../types/Post";
import { SpacerFixed } from "./SpacerFixed";
import TextInput from "./TextInput";

type Props = {
  defaultValues?: PostFormType;
};

export const PostForm = ({ defaultValues }: Props) => {
  const { control, handleSubmit } = useForm<PostFormType>({
    defaultValues: defaultValues,
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: PostFormType) => {
    dispatch(addPosts(data));
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>PostForm</Text>
      <SpacerFixed />
      <TextInput label="Title" control={control} name="title" />
      <SpacerFixed />
      <TextInput label="Body" control={control} name="body" />
      <SpacerFixed />
      <Button
        title={defaultValues ? "Update" : "Create"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapper: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: "white",
  },
});
