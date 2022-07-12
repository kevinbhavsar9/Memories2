import axios from "axios";

//const url = "https://memories23.herokuapp.com/posts";
const url = "https://memori-server.herokuapp.com/posts";

// const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (post, id) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
