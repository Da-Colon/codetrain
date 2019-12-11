import Axios from "axios";

export const getTopTechStories = async () => {
    const response = await Axios.get('https://newsapi.org/v2/top-headlines?apiKey=b041ecb7ff3f4ed3b0e70b3da1419bea&sources=techcrunch');
    return response;
};