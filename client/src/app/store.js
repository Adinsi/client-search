import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user.reducers";
import usersReducers from "../features/users.reducers";
import postsReducers from "../features/post.reducers";
import chatsReducers from "../features/chats.reducers";
import messagesReducers from "../features/message.reducers";
import allpostsReducers from "../features/allposts.reducers";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducers,
    posts: postsReducers,
    chats: chatsReducers,
    messages: messagesReducers,
    allposts: allpostsReducers,
  },
});
