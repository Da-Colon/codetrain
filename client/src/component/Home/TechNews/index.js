import React, { useState, useEffect } from "react";
import Story from "./Story";
import Axios from "axios";

const Index = () => {
  const [topStories, setTopStories] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const getTopTechStories = async () => {
    const response = await Axios.get(
      `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&sources=techcrunch`
    );
    const topStories = response.data.articles;
    setTopStories(topStories);
  };

  useEffect(() => {
    getTopTechStories();
  }, []);

  return (
    <div>
      <h1>Tech News Data</h1>
      <ul>
        {topStories.map(story => {
          // intentionally ignoring the unique key prop for now
          return (
            <li>
              <Story data={story} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
