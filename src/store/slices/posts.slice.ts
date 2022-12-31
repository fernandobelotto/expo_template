import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/Post";

type InitialState = {
  posts: Post[];
};

const initialState: InitialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts(state, action) {
      const id = Math.random() * 1000;
      state.posts.push({ ...action.payload, id });
    },
    removePostById(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePostById(state, action) {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
  },
});

export const { addPosts, removePostById, updatePostById } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
