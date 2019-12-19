import React, { useState, useEffect } from "react";
import Story from "./Story";
import Axios from "axios";
import styled from "styled-components";
import { Title } from "../../Styles/FormStyles";

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
    <Wrapper>
      <Title>TechCrunch Top Stories</Title>
      <ul>
        {topStories.map((story, i) => (
          <li key={i}>
            <Story data={story} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  overflow-y: auto;
  height: 92vh;
`;
export default Index;
