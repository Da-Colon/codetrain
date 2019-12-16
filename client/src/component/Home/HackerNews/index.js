import React, { useState, useEffect } from "react";
import Post from "./Post";
import Axios from "axios";

const Index = () => {
  const [topIds, setTopIds] = useState([]);

  const getTopStoriesIds = async () => {
    const response = await Axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const allIds = response.data;
    const topIds = allIds.slice(0, 10);
    setTopIds(topIds);
  };

  useEffect(() => {
    getTopStoriesIds();
  }, []);

  return (
    <div>
      <h1>HackerNews Data</h1>
      <ul>
        {topIds.map(id => {
          return (
            <li key={id}>
              <Post id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
