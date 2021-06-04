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
