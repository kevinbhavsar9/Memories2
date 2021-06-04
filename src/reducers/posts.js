export default function posts(posts = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      console.log(posts);
      const updatedArray = posts.filter(
        (post) => post._id != action.payload._id
      );
      return [action.payload, ...updatedArray];
    default:
      return posts;
  }
}
