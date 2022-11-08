import axios from "axios";

const baseUrl = "https://api.github.com/users/";

export const getGithubUser = async (user) => {
  try {
    const response = await axios.get(`${baseUrl}${user}`);
    return response;
  } catch (error) {
    return error;
  }
};
