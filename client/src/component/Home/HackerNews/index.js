import React, { useState, useEffect } from "react";
import Post from "./Post";
import Axios from "axios";
import styled from 'styled-components'
import {Title} from '../../Styles/FormStyles'

const Index = () => {
  const [topIds, setTopIds] = useState([]);

  const getTopStoriesIds = async () => {
    const response = await Axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const allIds = response.data;
    const topIds = allIds.slice(0, 25);
    setTopIds(topIds);
  };

  useEffect(() => {
    getTopStoriesIds();
  }, []);

  return (
    <Wrapper>
      <Title>HackerNews Top Stories</Title>
      { topIds.length > 1 ? <ul>
        {topIds.map(id => {
          return (
            <li key={id}>
              <Post id={id} />
            </li>
          );
        })}
      </ul> : <p>Loading...</p>}
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
  overflow-y: auto;
  height: 92vh;
`

export default Index;
