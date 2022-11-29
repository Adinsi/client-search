import { createSlice } from "@reduxjs/toolkit";

export const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    chats: [],
  },
  reducers: {
    setgetUserChats: (state, { payload }) => {
      state.chats = payload;
    },
  },
});

export const { setgetUserChats } = chatsSlice.actions;
export default chatsSlice.reducer;
