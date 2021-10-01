const initialState = {
  inProgress: false,
  posts: [],
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case "PROGRESS":
      return { ...state, inProgress: true };
    case "FETCH_ALL":
      return { ...state, posts: [...action.payload] };
    case "CREATE":
      return { inProgress: false, posts: [...state.posts, action.payload] };
    //  [...posts, action.payload];
    case "DELETE":
      const newArray = state.posts.filter(
        (post) => post._id != action.payload._id
      );
      return { inProgress: false, posts: newArray };
    // newArray;
    case "UPDATE":
      // console.log(posts);
      const updatedArray = state.posts.filter(
        (post) => post._id != action.payload._id
      );
      return { inProgress: false, posts: [action.payload, ...updatedArray] };

    // [action.payload, ...updatedArray];
    default:
      return state;
  }
}
