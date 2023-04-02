import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
