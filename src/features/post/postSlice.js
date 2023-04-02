import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "./postAPI";

export const fetchPosts = createAsyncThunk("post/fetchPost", async () => {
  const response = await getPosts();
  localStorage.setItem("posts", JSON.stringify(response.data));
  return response.data;
});

const initialState = {
  data: [],
  status: "idle",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

export default postSlice.reducer;
