import { Text, Pressable, StyleSheet, Button, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removePostById } from "../store/slices/posts.slice";

type Props = {
  item: {
    id: number;
    title: string;
  };
  navigate: (screen: string, params: { id: number }) => void;
};

export function PostItem({ item, navigate }: Props) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removePostById(item.id));
  };

  return (
    <Pressable
      onPress={() =>
        navigate("PostDetailScreen", {
          id: item.id,
        })
      }
    >
      <View style={styles.container}>
        <Text style={styles.item}>{item.title}</Text>
        <Button color="red" title="Delete" onPress={handleDelete} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {},
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
