const initialState = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
  _id: 0,
};

export const postData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST_DATA_TO_STORE":
      //   console.log(action.payload);
      const { creator, title, message, tags, selectedFile, _id } =
        action.payload;
      return {
        creator,
        title,
        message,
        tags,
        selectedFile,
        _id,
      };
    case "CLEAR_FORM_DATA":
      return null;
    default:
      return null;
  }
};
