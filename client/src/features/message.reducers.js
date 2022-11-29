import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  reducers: {
    setgetUserConversation: (state, { payload }) => {
      state.messages = payload;
    },
  },
});

export const { setgetUserConversation } = messageSlice.actions;
export default messageSlice.reducer;
