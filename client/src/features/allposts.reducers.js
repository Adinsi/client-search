import  { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "allposts",
  initialState: {
    allposts: [],
  },
  reducers: {
    getAllPostAlls: (state, { payload }) => {
      state.allposts = payload;
    },

    addPost: (state, { payload }) => {
      state.allposts?.push(payload);
    },

   
  },
});

export const {
  getAllPostAlls,

} = postSlice.actions;
export default postSlice.reducer;
