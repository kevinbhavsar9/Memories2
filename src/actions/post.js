import * as api from "../api";

export const addPostDataToStore = (post) => {
  return {
    type: "ADD_POST_DATA_TO_STORE",
    payload: post,
  };
};
export const clearFormData = (post) => {
  return {
    type: "CLEAR_FORM_DATA",
  };
};

export const updatePost = (post, id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(post, id);
      console.log(data);
      dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
