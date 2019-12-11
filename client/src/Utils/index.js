import Axios from "axios";

// Gets the top 500 Story Ids
export const getTopStoriesIds = async () => {
    const response = await Axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    return response;
};


export const getAnItem = async id => {
    const response = await Axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    return response;
};
