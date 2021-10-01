import * as api from "../api";

//Action Creator
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const createPost = (post) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PROGRESS" });
      const { data } = await api.createPost(post);
      const res = await api.createPost(post);
      console.log(res);
      dispatch({ type: "CREATE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      console.log("deleting...");
      const { data } = await api.deletePost(id);
      dispatch({ type: "DELETE", payload: data });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
};
