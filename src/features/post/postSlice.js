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
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.data));
    },
    removeData: (state, action) => {
      state.data = state.data.filter((d) => d.id !== action.payload);
      localStorage.setItem("posts", JSON.stringify(state.data));
    },
    updateData: (state, action) => {
      const index = state.data.findIndex((d) => d.id === action.payload.id);
      state.data[index] = action.payload;
      localStorage.setItem("posts", JSON.stringify(state.data));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { addData, removeData, updateData } = postSlice.actions;

export default postSlice.reducer;
