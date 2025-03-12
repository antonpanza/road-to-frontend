import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const postsApi = {
  async getRandomPost() {
    const { data } = await axios.get(API_URL);
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  },
};