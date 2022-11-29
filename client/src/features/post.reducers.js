import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    getAllPost: (state, { payload }) => {
      state.posts = payload;
    },

    addPost: (state, { payload }) => {
      state.posts?.push(payload);
    },

    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload);
    },
    // deleteUser: (state, { payload }) => {
    //   state.user = state.user.filter((user) => {
    //     return user.id !== payload;
    //   });
    // },
    likePost: (state, { payload }) => {
      state.posts = state.posts?.map((post) => {
        if (post._id === payload) {
          return state.posts.likers?.push(payload);
        }
        return post;
      });
    },
    signalPost: (state, { payload }) => {
      state.posts = state.posts?.map((post) => {
        if (post._id === payload) {
          return state.posts.signal?.push(payload);
        }
        return post;
      });
    },
    unsignalPost: (state, { payload }) => {
      state.posts = state.posts?.map((post) => {
        if (post._id === payload) {
          return state.posts.signal?.filter((id) => id !== payload);
        }
        return post;
      });
    },
    dislikePost: (state, { payload }) => {
      state.posts = state.posts?.map((post) => {
        if (post._id === payload) {
          return state.posts.likers?.filter((id) => id !== payload);
        }
        return post;
      });
    },

    editPost: (state, { payload }) => {
      state.posts = state.posts.map((post) => {
        if (post._id === payload) {
          return state.posts.message?.push(payload);
        } else return post;
      });
    },
    // Posts commentaires

    addComment: (state, { payload }) => {
      state.posts = state.posts?.map((post) => {
        if (post._id === payload) {
          return state.posts.comments?.push(payload);
        }
        return post;
      });
    },
    addComments: (state, { payload }) => {
      state.posts = state.posts?.map((post) => {
        if (post._id === payload) {
          return state.posts.comments?.push(payload);
        }
        return post;
      });
    },
    editCommentPost: (state, { payload }) => {
      state.posts = state.posts.map((post) => {
        if (post._id === payload) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment._id === payload) {
                return {
                  ...comment,
                  text: payload,
                };
              } else {
                return comment;
              }
            }),
          };
        } else return post;
      });
    },
    deleteCommentPost: (state, { payload }) => {
      state.posts = state.posts.map((post) => {
        if (post._id === payload) {
          return {
            ...post,
            comments: post.comments.filter(
              (comment) => comment._id !== payload
            ),
          };
        } else return post;
      });
    },
  },
});

export const {
  getAllPost,
  editCommentPost,
  deleteCommentPost,
  addPost,
  deletePost,
  likePost,
  signalPost,
  unsignalPost,
  dislikePost,
  editPost,
  addComment,
} = postSlice.actions;
export default postSlice.reducer;
