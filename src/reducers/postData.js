const initialState = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

export const postData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST_DATA_TO_STORE":
      const { creator, title, message, tags, selectedFile } = action.payload;
      return {
        creator,
        title,
        message,
        tags,
        selectedFile,
      };
    case "CLEAR_FORM_DATA":
      return initialState;
    default:
      return state;
  }
};
